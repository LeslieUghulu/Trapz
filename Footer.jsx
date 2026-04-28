@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

@import "tailwindcss";

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }

body {
  background: #010101;
  color: white;
  font-family: 'DM Sans', sans-serif;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.gradient-text {
  background: linear-gradient(135deg, #ffffff 0%, #FA93FA 40%, #C967E8 70%, #983AD6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.gradient-brand { background: linear-gradient(135deg, #FA93FA, #C967E8, #983AD6); }

::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: #010101; }
::-webkit-scrollbar-thumb { background: #983AD6; border-radius: 2px; }
