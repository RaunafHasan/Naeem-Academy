// HTML Tags Database - Organized by Categories
const htmlTags = [
    // ===== 1. Basic Structure Tags =====
    {
        name: '<html>',
        category: 'Basic Structure',
        description: 'HTML ডকুমেন্টের রুট এলিমেন্ট - সব HTML কোড এই ট্যাগের মধ্যে থাকে।\n\n📌 বৈশিষ্ট্য:\n• এটি পুরো HTML ডকুমেন্টকে wrap করে\n• প্রতিটি HTML ফাইলে একটি মাত্র html ট্যাগ থাকে\n• এর মধ্যে head এবং body থাকে\n\n📌 Attribute:\n• lang - ভাষা নির্ধারণ (যেমন: lang="bn" বাংলার জন্য)',
        syntax: '&lt;html&gt;\n  &lt;head&gt;...&lt;/head&gt;\n  &lt;body&gt;...&lt;/body&gt;\n&lt;/html&gt;',
        example: '&lt;!DOCTYPE html&gt;\n&lt;html lang="bn"&gt;\n  &lt;head&gt;&lt;title&gt;My Page&lt;/title&gt;&lt;/head&gt;\n  &lt;body&gt;Content&lt;/body&gt;\n&lt;/html&gt;',
        output: '<div style="padding: 10px; background: #1e293b; border-radius: 4px;">📄 Complete HTML Document Structure</div>',
        challenge: 'একটি সম্পূর্ণ HTML ডকুমেন্ট তৈরি করো html, head এবং body ট্যাগ দিয়ে',
        icon: 'HTML',
        color: 'from-orange-500 to-red-500'
    },
    {
        name: '<head>',
        category: 'Basic Structure',
        description: 'ডকুমেন্টের মেটাডাটা ধারণ করে - ব্রাউজারে দেখা যায় না।\n\n📌 এর মধ্যে যা থাকে:\n• <title> - পেজের শিরোনাম\n• <meta> - charset, viewport ইত্যাদি\n• <link> - CSS ফাইল সংযুক্ত\n• <style> - Internal CSS\n• <script> - JavaScript',
        syntax: '&lt;head&gt;\n  &lt;title&gt;Page Title&lt;/title&gt;\n  &lt;meta charset="UTF-8"&gt;\n&lt;/head&gt;',
        example: '&lt;head&gt;\n  &lt;title&gt;আমার ওয়েবসাইট&lt;/title&gt;\n  &lt;meta charset="UTF-8"&gt;\n&lt;/head&gt;',
        output: '<div style="padding: 10px; background: #1e293b; border-radius: 4px;">🧠 Head contains metadata (not visible on page)</div>',
        challenge: 'head ট্যাগের মধ্যে একটি title ট্যাগ লেখো',
        icon: 'HEAD',
        color: 'from-blue-500 to-indigo-500'
    },
    {
        name: '<title>',
        category: 'Basic Structure',
        description: 'ব্রাউজার ট্যাবে পেজের শিরোনাম দেখায়।\n\n📌 বৈশিষ্ট্য:\n• Browser tab এ পেজের নাম দেখায়\n• Google search results এ title দেখায়\n• Bookmark করলে এই নাম সেভ হয়',
        syntax: '&lt;title&gt;Page Title&lt;/title&gt;',
        example: '&lt;title&gt;আমার প্রথম ওয়েবসাইট&lt;/title&gt;',
        output: '<div style="padding: 10px; background: #1e293b; border-radius: 4px;">📑 Browser Tab: "আমার প্রথম ওয়েবসাইট"</div>',
        challenge: 'তোমার নাম দিয়ে একটি title ট্যাগ লেখো',
        icon: 'TITLE',
        color: 'from-purple-500 to-pink-500'
    },
    {
        name: '<body>',
        category: 'Basic Structure',
        description: 'পেজের সব দৃশ্যমান কন্টেন্ট এখানে থাকে।\n\n📌 এর মধ্যে যা থাকে:\n• Headings (h1-h6)\n• Paragraphs (p)\n• Images (img)\n• Links (a)\n• Tables, Forms, Lists',
        syntax: '&lt;body&gt;\n  &lt;!-- সব কন্টেন্ট এখানে --&gt;\n&lt;/body&gt;',
        example: '&lt;body&gt;\n  &lt;h1&gt;স্বাগতম&lt;/h1&gt;\n  &lt;p&gt;এটি আমার ওয়েবসাইট&lt;/p&gt;\n&lt;/body&gt;',
        output: '<div style="padding: 15px; background: #1e293b; border-radius: 4px;"><h1 style="margin: 0 0 10px 0;">স্বাগতম</h1><p style="margin: 0;">এটি আমার ওয়েবসাইট</p></div>',
        challenge: 'body ট্যাগের মধ্যে একটি heading এবং paragraph লেখো',
        icon: 'BODY',
        color: 'from-green-500 to-teal-500'
    },
    // ===== 2. Text Formatting Tags =====
    {
        name: '<h1> - <h6>',
        category: 'Text Formatting',
        description: 'Heading ট্যাগ - শিরোনাম লেখার জন্য।\n\n📌 ৬ ধরনের Heading:\n• h1 - সবচেয়ে বড় (Main heading)\n• h2 - দ্বিতীয় বড় (Sub heading)\n• h3 থেকে h6 - ক্রমান্বয়ে ছোট',
        syntax: '&lt;h1&gt;সবচেয়ে বড় Heading&lt;/h1&gt;\n&lt;h2&gt;দ্বিতীয় Heading&lt;/h2&gt;\n...\n&lt;h6&gt;সবচেয়ে ছোট Heading&lt;/h6&gt;',
        example: '&lt;h1&gt;Main Title&lt;/h1&gt;\n&lt;h2&gt;Sub Title&lt;/h2&gt;\n&lt;h3&gt;Section Title&lt;/h3&gt;',
        output: '<h1 style="margin: 0 0 5px 0; font-size: 1.8em;">Main Title</h1><h2 style="margin: 0 0 5px 0; font-size: 1.4em;">Sub Title</h2><h3 style="margin: 0; font-size: 1.1em;">Section Title</h3>',
        challenge: 'h1, h2, h3 দিয়ে তোমার স্কুলের নাম, ক্লাস এবং বিষয় লেখো',
        icon: 'H1-6',
        color: 'from-blue-500 to-cyan-500'
    },
    {
        name: '<p>',
        category: 'Text Formatting',
        description: 'Paragraph ট্যাগ - সাধারণ টেক্সট লেখার জন্য।\n\n📌 বৈশিষ্ট্য:\n• লেখার প্যারাগ্রাফ তৈরি করে\n• ব্রাউজার স্বয়ংক্রিয়ভাবে উপরে-নিচে margin দেয়',
        syntax: '&lt;p&gt;এখানে প্যারাগ্রাফ লিখুন&lt;/p&gt;',
        example: '&lt;p&gt;এটি প্রথম প্যারাগ্রাফ।&lt;/p&gt;\n&lt;p&gt;এটি দ্বিতীয় প্যারাগ্রাফ।&lt;/p&gt;',
        output: '<p style="margin: 0 0 10px 0;">এটি প্রথম প্যারাগ্রাফ।</p><p style="margin: 0;">এটি দ্বিতীয় প্যারাগ্রাফ।</p>',
        challenge: 'তোমার পছন্দের খেলা নিয়ে দুটি প্যারাগ্রাফ লেখো',
        icon: 'P',
        color: 'from-purple-500 to-pink-500'
    },
    {
        name: '<b>',
        category: 'Text Formatting',
        description: 'Bold ট্যাগ - লেখাকে মোটা করে দেখায়।',
        syntax: '&lt;b&gt;মোটা লেখা&lt;/b&gt;',
        example: 'এটি &lt;b&gt;গুরুত্বপূর্ণ&lt;/b&gt; তথ্য।',
        output: 'এটি <b>গুরুত্বপূর্ণ</b> তথ্য।',
        challenge: 'একটি বাক্যে কিছু শব্দ bold করো',
        icon: 'B',
        color: 'from-yellow-500 to-orange-500'
    },
    {
        name: '<i>',
        category: 'Text Formatting',
        description: 'Italic ট্যাগ - লেখাকে বাঁকা/তির্যক করে দেখায়।',
        syntax: '&lt;i&gt;বাঁকা লেখা&lt;/i&gt;',
        example: 'বইটির নাম &lt;i&gt;পথের পাঁচালী&lt;/i&gt;',
        output: 'বইটির নাম <i>পথের পাঁচালী</i>',
        challenge: 'তোমার পছন্দের বইয়ের নাম italic করে লেখো',
        icon: 'I',
        color: 'from-pink-500 to-rose-500'
    },
    {
        name: '<u>',
        category: 'Text Formatting',
        description: 'Underline ট্যাগ - লেখার নিচে দাগ দেয়।',
        syntax: '&lt;u&gt;আন্ডারলাইন লেখা&lt;/u&gt;',
        example: '&lt;u&gt;গুরুত্বপূর্ণ নোট&lt;/u&gt;',
        output: '<u>গুরুত্বপূর্ণ নোট</u>',
        challenge: 'একটি গুরুত্বপূর্ণ বাক্য underline করো',
        icon: 'U',
        color: 'from-indigo-500 to-blue-500'
    },
    {
        name: '<br>',
        category: 'Text Formatting',
        description: 'Line Break ট্যাগ - নতুন লাইনে যাওয়ার জন্য। Self-closing tag.',
        syntax: 'লাইন ১&lt;br&gt;\nলাইন ২',
        example: 'বাংলাদেশ&lt;br&gt;\nঢাকা&lt;br&gt;\nমিরপুর',
        output: 'বাংলাদেশ<br>ঢাকা<br>মিরপুর',
        challenge: 'তোমার ঠিকানা br ট্যাগ দিয়ে ৩ লাইনে লেখো',
        icon: 'BR',
        color: 'from-gray-500 to-slate-500'
    },
    {
        name: '<hr>',
        category: 'Text Formatting',
        description: 'Horizontal Rule - আনুভূমিক রেখা তৈরি করে।',
        syntax: '&lt;p&gt;Section 1&lt;/p&gt;\n&lt;hr&gt;\n&lt;p&gt;Section 2&lt;/p&gt;',
        example: '&lt;h2&gt;পরিচিতি&lt;/h2&gt;\n&lt;hr&gt;\n&lt;p&gt;আমি একজন ছাত্র।&lt;/p&gt;',
        output: '<h2 style="margin: 0 0 5px 0;">পরিচিতি</h2><hr style="border: 0; height: 1px; background: #64748b; margin: 10px 0;"><p style="margin: 0;">আমি একজন ছাত্র।</p>',
        challenge: 'দুটি বিভাগ তৈরি করো এবং hr দিয়ে আলাদা করো',
        icon: 'HR',
        color: 'from-slate-500 to-gray-600'
    },
    // ===== 3. List Tags =====
    {
        name: '<ul>',
        category: 'List Tags',
        description: 'Unordered List - বুলেট পয়েন্ট দিয়ে লিস্ট তৈরি করে।\n\n📌 Attributes:\n• type="disc" - ভরাট বৃত্ত (default)\n• type="circle" - ফাঁকা বৃত্ত\n• type="square" - বর্গ',
        syntax: '&lt;ul&gt;\n  &lt;li&gt;Item 1&lt;/li&gt;\n  &lt;li&gt;Item 2&lt;/li&gt;\n&lt;/ul&gt;',
        example: '&lt;ul&gt;\n  &lt;li&gt;আম&lt;/li&gt;\n  &lt;li&gt;জাম&lt;/li&gt;\n  &lt;li&gt;কাঁঠাল&lt;/li&gt;\n&lt;/ul&gt;',
        output: '<ul style="margin: 0; padding-left: 25px;"><li>আম</li><li>জাম</li><li>কাঁঠাল</li></ul>',
        challenge: 'তোমার পছন্দের ৩টি ফলের ul list বানাও',
        icon: 'UL',
        color: 'from-indigo-500 to-purple-500'
    },
    {
        name: '<ol>',
        category: 'List Tags',
        description: 'Ordered List - নম্বর দিয়ে ক্রমানুসারে লিস্ট তৈরি করে।\n\n📌 Type Attributes:\n• type="1" - সংখ্যা\n• type="A" - বড় হাতের অক্ষর\n• type="a" - ছোট হাতের অক্ষর\n• type="I" - রোমান',
        syntax: '&lt;ol&gt;\n  &lt;li&gt;প্রথম&lt;/li&gt;\n  &lt;li&gt;দ্বিতীয়&lt;/li&gt;\n&lt;/ol&gt;',
        example: '&lt;ol&gt;\n  &lt;li&gt;HTML শেখা&lt;/li&gt;\n  &lt;li&gt;CSS শেখা&lt;/li&gt;\n  &lt;li&gt;JavaScript শেখা&lt;/li&gt;\n&lt;/ol&gt;',
        output: '<ol style="margin: 0; padding-left: 25px;"><li>HTML শেখা</li><li>CSS শেখা</li><li>JavaScript শেখা</li></ol>',
        challenge: 'type="A" দিয়ে তোমার ৩টি পছন্দের বিষয়ের ordered list বানাও',
        icon: 'OL',
        color: 'from-blue-500 to-indigo-500'
    },
    // ===== 4. Link & Media Tags =====
    {
        name: '<a>',
        category: 'Link & Media',
        description: 'Anchor/Link ট্যাগ - অন্য পেজ বা ওয়েবসাইটে লিংক তৈরি করে।\n\n📌 Attributes:\n• href - গন্তব্যের URL\n• target="_blank" - নতুন ট্যাবে খোলে\n• title - হোভার করলে টেক্সট দেখায়',
        syntax: '&lt;a href="url"&gt;Link Text&lt;/a&gt;',
        example: '&lt;a href="https://google.com" target="_blank"&gt;গুগল&lt;/a&gt;',
        output: '<a href="https://google.com" target="_blank" style="color: #22d3ee; text-decoration: underline;">গুগল</a>',
        challenge: 'Google.com এ লিংক বানাও যা নতুন ট্যাবে খুলবে',
        icon: 'A',
        color: 'from-emerald-500 to-teal-500'
    },
    {
        name: '<img>',
        category: 'Link & Media',
        description: 'Image ট্যাগ - ছবি দেখানোর জন্য। Self-closing tag.\n\n📌 আবশ্যক Attributes:\n• src - ছবির path/URL\n• alt - ছবির বর্ণনা\n\n📌 ঐচ্ছিক:\n• width, height - আকার\n• border - বর্ডার',
        syntax: '&lt;img src="image.jpg" alt="বর্ণনা"&gt;',
        example: '&lt;img src="photo.jpg" alt="সুন্দর ফুল" width="200"&gt;',
        output: '<div style="text-align: center;"><div style="font-size: 24px;">🖼️</div><div style="color: #94a3b8; font-size: 11px;">src="photo.jpg", alt="সুন্দর ফুল"</div></div>',
        challenge: 'একটি ছবি দেখাও src এবং alt attribute দিয়ে',
        icon: 'IMG',
        color: 'from-orange-500 to-red-500'
    },
    // ===== 5. Table Tags =====
    {
        name: '<table>',
        category: 'Table Tags',
        description: 'Table তৈরির মূল ট্যাগ।\n\n📌 Attributes:\n• border - টেবিলের বর্ডার\n• cellpadding - সেলের ভিতরে স্পেস\n• cellspacing - সেলগুলোর মধ্যে গ্যাপ',
        syntax: '&lt;table border="1"&gt;\n  &lt;tr&gt;\n    &lt;th&gt;Header&lt;/th&gt;\n  &lt;/tr&gt;\n  &lt;tr&gt;\n    &lt;td&gt;Data&lt;/td&gt;\n  &lt;/tr&gt;\n&lt;/table&gt;',
        example: '&lt;table border="1"&gt;\n  &lt;tr&gt;&lt;th&gt;নাম&lt;/th&gt;&lt;th&gt;বয়স&lt;/th&gt;&lt;/tr&gt;\n  &lt;tr&gt;&lt;td&gt;রহিম&lt;/td&gt;&lt;td&gt;১৫&lt;/td&gt;&lt;/tr&gt;\n&lt;/table&gt;',
        output: '<table border="1" cellpadding="8" style="border-collapse: collapse;"><tr><th style="background: #334155;">নাম</th><th style="background: #334155;">বয়স</th></tr><tr><td>রহিম</td><td>১৫</td></tr></table>',
        challenge: 'একটি টেবিল বানাও ২টি কলাম এবং ৩টি সারি দিয়ে',
        icon: 'TABLE',
        color: 'from-violet-500 to-purple-500'
    },
    {
        name: '<tr>',
        category: 'Table Tags',
        description: 'Table Row - টেবিলের একটি সারি তৈরি করে।',
        syntax: '&lt;tr&gt;\n  &lt;td&gt;Data 1&lt;/td&gt;\n  &lt;td&gt;Data 2&lt;/td&gt;\n&lt;/tr&gt;',
        example: '&lt;tr&gt;\n  &lt;td&gt;বাংলাদেশ&lt;/td&gt;\n  &lt;td&gt;ঢাকা&lt;/td&gt;\n&lt;/tr&gt;',
        output: '<table border="1" cellpadding="8" style="border-collapse: collapse;"><tr><td>বাংলাদেশ</td><td>ঢাকা</td></tr></table>',
        challenge: 'একটি tr এর মধ্যে তোমার নাম ও ক্লাস লেখো',
        icon: 'TR',
        color: 'from-blue-500 to-violet-500'
    },
    {
        name: '<th>',
        category: 'Table Tags',
        description: 'Table Heading - টেবিলের হেডিং সেল। স্বয়ংক্রিয়ভাবে Bold এবং Center aligned।',
        syntax: '&lt;tr&gt;\n  &lt;th&gt;Heading 1&lt;/th&gt;\n  &lt;th&gt;Heading 2&lt;/th&gt;\n&lt;/tr&gt;',
        example: '&lt;tr&gt;\n  &lt;th&gt;বিষয়&lt;/th&gt;\n  &lt;th&gt;নম্বর&lt;/th&gt;\n&lt;/tr&gt;',
        output: '<table border="1" cellpadding="8" style="border-collapse: collapse;"><tr><th style="background: #334155; font-weight: bold;">বিষয়</th><th style="background: #334155; font-weight: bold;">নম্বর</th></tr></table>',
        challenge: 'টেবিলের জন্য heading row তৈরি করো',
        icon: 'TH',
        color: 'from-amber-500 to-orange-500'
    },
    {
        name: '<td>',
        category: 'Table Tags',
        description: 'Table Data - টেবিলের সাধারণ ডাটা সেল।',
        syntax: '&lt;td&gt;Data content&lt;/td&gt;',
        example: '&lt;tr&gt;\n  &lt;td&gt;গণিত&lt;/td&gt;\n  &lt;td&gt;৮৫&lt;/td&gt;\n&lt;/tr&gt;',
        output: '<table border="1" cellpadding="8" style="border-collapse: collapse;"><tr><td>গণিত</td><td>৮৫</td></tr></table>',
        challenge: 'তোমার একটি বিষয় এবং নম্বর td দিয়ে লেখো',
        icon: 'TD',
        color: 'from-green-500 to-emerald-500'
    },
    // ===== 6. Form Tags =====
    {
        name: '<form>',
        category: 'Form Tags',
        description: 'Form তৈরির জন্য - User থেকে input নেওয়ার জন্য।',
        syntax: '&lt;form&gt;\n  &lt;input type="text"&gt;\n  &lt;input type="submit"&gt;\n&lt;/form&gt;',
        example: '&lt;form&gt;\n  &lt;input type="text" placeholder="নাম লিখুন"&gt;\n  &lt;input type="submit" value="জমা দিন"&gt;\n&lt;/form&gt;',
        output: '<form style="display: flex; gap: 10px; align-items: center;"><input type="text" placeholder="নাম লিখুন" style="padding: 8px; border-radius: 4px; border: 1px solid #64748b; background: #1e293b; color: white;"><input type="submit" value="জমা দিন" style="padding: 8px 16px; background: #22d3ee; border: none; border-radius: 4px; cursor: pointer;"></form>',
        challenge: 'একটি সাধারণ form বানাও text input এবং submit button দিয়ে',
        icon: 'FORM',
        color: 'from-rose-500 to-pink-500'
    },
    {
        name: '<input>',
        category: 'Form Tags',
        description: 'Input field - User থেকে data নেওয়ার জন্য।\n\n📌 Common Types:\n• type="text" - সাধারণ টেক্সট\n• type="password" - পাসওয়ার্ড\n• type="email" - ইমেইল\n• type="submit" - জমা দেওয়ার button',
        syntax: '&lt;input type="text" placeholder="লেখা লিখুন"&gt;',
        example: '&lt;input type="text" placeholder="নাম"&gt;\n&lt;input type="password" placeholder="পাসওয়ার্ড"&gt;\n&lt;input type="submit" value="Submit"&gt;',
        output: '<div style="display: flex; flex-direction: column; gap: 8px;"><input type="text" placeholder="নাম" style="padding: 8px; border-radius: 4px; border: 1px solid #64748b; background: #1e293b; color: white;"><input type="password" placeholder="পাসওয়ার্ড" style="padding: 8px; border-radius: 4px; border: 1px solid #64748b; background: #1e293b; color: white;"><input type="submit" value="Submit" style="padding: 8px 16px; background: #22d3ee; border: none; border-radius: 4px; cursor: pointer; width: fit-content;"></div>',
        challenge: 'text, password এবং submit type এর input বানাও',
        icon: 'INPUT',
        color: 'from-cyan-500 to-blue-500'
    }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    renderTagCards();
    setupEventListeners();
});

// Current filter
let currentFilter = 'all';

// Filter by category
function filterByCategory(category) {
    currentFilter = category;
    
    // Update button styles
    document.querySelectorAll('.category-btn').forEach(btn => {
        if (btn.dataset.category === category) {
            btn.classList.remove('bg-slate-800', 'text-slate-300');
            btn.classList.add('bg-cyan-500', 'text-white', 'active');
        } else {
            btn.classList.remove('bg-cyan-500', 'text-white', 'active');
            btn.classList.add('bg-slate-800', 'text-slate-300');
        }
    });
    
    renderTagCards(category);
}

window.filterByCategory = filterByCategory;

// Render tag cards
function renderTagCards(filter = 'all') {
    const tagGrid = document.getElementById('tagGrid');
    tagGrid.innerHTML = '';

    const filteredTags = filter === 'all' 
        ? htmlTags 
        : htmlTags.filter(tag => tag.category === filter);

    filteredTags.forEach((tag, index) => {
        const card = createTagCard(tag, index);
        tagGrid.appendChild(card);
    });

    setTimeout(() => {
        document.querySelectorAll('.tag-card').forEach(card => {
            card.classList.add('animated');
        });
    }, 1000);
}

function escapeHtml(text) {
    return text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function createTagCard(tag, index) {
    const card = document.createElement('div');
    card.className = 'tag-card bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/50 transition-all cursor-pointer';
    card.style.animationDelay = `${index * 0.05}s`;

    const escapedName = escapeHtml(tag.name);

    card.innerHTML = `
        <div class="flex items-start justify-between mb-3">
            <div class="flex items-center space-x-4">
                <div class="tag-icon w-12 h-12 bg-gradient-to-br ${tag.color} rounded-xl flex items-center justify-center text-white font-black text-xs shadow-lg">
                    ${tag.icon}
                </div>
                <div>
                    <h3 class="text-xl font-bold text-white mb-1 font-mono">${escapedName}</h3>
                    <span class="text-xs text-cyan-400 font-semibold uppercase tracking-wider">${tag.category}</span>
                </div>
            </div>
        </div>
        <p class="text-slate-400 text-sm leading-relaxed mb-4">${tag.description.substring(0, 80)}...</p>
        <div class="pt-3 border-t border-slate-800">
            <button class="text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors flex items-center space-x-2">
                <span>বিস্তারিত দেখুন</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
            </button>
        </div>
    `;

    card.addEventListener('click', () => openTagModal(tag));
    return card;
}

function openTagModal(tag) {
    const modal = document.getElementById('tagModal');
    
    document.getElementById('modalTagName').textContent = tag.name;
    document.getElementById('modalDescription').innerHTML = tag.description.replace(/\n/g, '<br>');
    document.getElementById('modalSyntax').innerHTML = tag.syntax;
    document.getElementById('modalExample').innerHTML = tag.example;
    document.getElementById('modalOutput').innerHTML = tag.output;
    document.getElementById('modalChallenge').innerHTML = tag.challenge.replace(/\n/g, '<br>');
    
    document.getElementById('practiceInput').value = '';
    document.getElementById('practiceOutput').classList.add('hidden');
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('tagModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
}

function runPracticeCode() {
    const input = document.getElementById('practiceInput').value;
    const output = document.getElementById('practiceOutput');
    const result = document.getElementById('practiceResult');
    
    if (input.trim() === '') {
        showNotification('Please write some code first!', 'warning');
        return;
    }
    
    try {
        result.innerHTML = input;
        output.classList.remove('hidden');
        showNotification('Code executed successfully!', 'success');
    } catch (error) {
        result.innerHTML = `<span style="color: #ef4444;">Error: ${error.message}</span>`;
        output.classList.remove('hidden');
        showNotification('There was an error in your code', 'error');
    }
}

function resetPracticeCode() {
    document.getElementById('practiceInput').value = '';
    document.getElementById('practiceOutput').classList.add('hidden');
    showNotification('Practice area cleared', 'info');
}

function showNotification(message, type = 'info') {
    const colors = {
        success: 'bg-emerald-500',
        error: 'bg-red-500',
        warning: 'bg-yellow-500',
        info: 'bg-cyan-500'
    };
    
    const notification = document.createElement('div');
    notification.className = `fixed top-24 right-6 ${colors[type]} text-white px-6 py-3 rounded-lg shadow-2xl z-50 font-semibold`;
    notification.style.animation = 'slideInRight 0.3s ease-out';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function setupEventListeners() {
    document.getElementById('closeModal').addEventListener('click', closeModal);
    
    document.getElementById('tagModal').addEventListener('click', (e) => {
        if (e.target.id === 'tagModal') {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
    
    document.getElementById('runCode').addEventListener('click', runPracticeCode);
    document.getElementById('resetCode').addEventListener('click', resetPracticeCode);
    
    document.getElementById('practiceInput').addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault();
            runPracticeCode();
        }
    });
}

console.log('%c🚀 Naeem Academy - HTML Learning', 'font-size: 20px; font-weight: bold; color: #22d3ee;');
