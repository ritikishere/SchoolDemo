import { useState, useEffect } from 'react';

const ResultForm = () => {
  const [rollNo, setRollNo] = useState('');
  const [studentClass, setStudentClass] = useState('LKG');
  const [captcha, setCaptcha] = useState({ question: '', answer: '' });
  const [userCaptcha, setUserCaptcha] = useState('');
  const [error, setError] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [result, setResult] = useState(null);

  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    setCaptcha({ question: `${a} + ${b}`, answer: (a + b).toString() });
    setUserCaptcha('');
    setIsVerified(false);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isVerified) {
      setError('Please verify the captcha');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/result', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rollNo, class: studentClass })
      });

      if (res.ok) {
        const data = await res.json();
        setResult(data);
        setError('');
      } else {
        const data = await res.json();
        setError(data.message);
        setResult(null);
      }
    } catch (err) {
      setError('Server error');
    }
  };

  const checkCaptcha = (value) => {
    setUserCaptcha(value);
    setIsVerified(value === captcha.answer);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 px-4 py-10">
      <div className="w-full max-w-md bg-white p-8 md:p-10 lg:p-12 rounded-2xl shadow-2xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">🔍 Check Your Result</h2>

        {!result && (
          <form onSubmit={handleSubmit} className="flex flex-col justify-around items-center gap-5 ">
            <input
              type="text"
              placeholder="Enter Roll No"
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
              className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            <select
              value={studentClass}
              onChange={(e) => setStudentClass(e.target.value)}
              className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {['LKG', 'UKG', ...Array.from({ length: 10 }, (_, i) => `${i + 1}th`)].map((cls) => (
                <option key={cls} value={cls}>{cls}</option>
              ))}
            </select>

            <div className="flex items-center gap-3">
              <label className="w-1/2 text-sm font-medium text-gray-700">{captcha.question} = ?</label>
              <input
                type="text"
                value={userCaptcha}
                onChange={(e) => checkCaptcha(e.target.value)}
                className="w-1/2 px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <button
              type="submit"
              className={`w-full py-4 text-white text-lg font-semibold rounded-lg transition ${
                isVerified ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
              }`}
              disabled={!isVerified}
            >
              Get Result
            </button>

            {error && <p className="text-red-600 text-center text-sm">{error}</p>}
          </form>
        )}

        {result && (
          <div className="mt-6 bg-green-50 border border-green-400 rounded-lg p-4 space-y-1">
            <h3 className="text-lg font-semibold mb-2 text-green-800">📄 Result:</h3>
            <p><strong>Name:</strong> {result.name}</p>
            <p><strong>Roll No:</strong> {result.rollNo}</p>
            <p><strong>Class:</strong> {result.class}</p>
            <p><strong>Marks:</strong> {result.marks}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultForm;
