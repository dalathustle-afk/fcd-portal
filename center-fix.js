const fs = require('fs');
let code = fs.readFileSync('src/app/an-nhien/page.tsx', 'utf8');

// Fix 1: add mx-auto to w-full max-w-*
code = code.replace(/className="w-full max-w-2xl"/g, 'className="w-full max-w-2xl mx-auto"');
code = code.replace(/className="w-full max-w-4xl space-y-4"/g, 'className="w-full max-w-4xl mx-auto space-y-4"');
code = code.replace(/className="w-full max-w-4xl rounded-\[32px\] overflow-hidden shadow-xl border border-slate-200 bg-\[#E6BF50\] mb-8"/g, 'className="w-full max-w-4xl mx-auto rounded-[32px] overflow-hidden shadow-xl border border-slate-200 bg-[#E6BF50] mb-8"');
code = code.replace(/className="grid lg:grid-cols-2 gap-4 w-full max-w-4xl"/g, 'className="grid lg:grid-cols-2 gap-4 w-full max-w-4xl mx-auto"');

// Fix 2: center content inside 10 steps (make it center on all screens)
code = code.replace(/className={\`\$\{bentoCardLight\} p-5 flex gap-5 items-start z-10 animate-fade-in\`}/g, 'className={`\\${bentoCardLight} p-6 flex flex-col items-center text-center gap-4 z-10 animate-fade-in`}');

// Fix the flex wrapper inside the 10 steps card (icon + text row -> icon + centered text col)
code = code.replace(/className="flex items-start justify-between gap-3 flex-wrap mb-1.5"/g, 'className="flex flex-col items-center justify-center gap-2 mb-2"');

fs.writeFileSync('src/app/an-nhien/page.tsx', code);
