const taskPool = [
    {
        title: "Clean Profile Header",
        topic: "HTML & CSS Basics",
        description: "Replicate a profile header with a circular avatar image next to an H1 name and a paragraph bio. Use flexbox to align them.",
        targetHTML: `<div class='profile-header'>\n  <img src='https://i.pravatar.cc/100' class='avatar'>\n  <div class='bio'>\n    <h1>Jane Doe</h1>\n    <p>Frontend Developer & Designer</p>\n  </div>\n</div>`,
        targetCSS: `.profile-header { display: flex; align-items: center; gap: 20px; }\n.avatar { border-radius: 50%; border: 3px solid #6366f1; width: 100px; height: 100px; }\n.bio h1 { margin: 0; color: #1e293b; }\n.bio p { margin: 5px 0 0; color: #64748b; }`
    },
    {
        title: "Primary Call-to-Action",
        topic: "CSS Buttons",
        description: "Create a large primary button with a gradient background, rounded corners, and a white shadow on hover.",
        targetHTML: `<button class='btn-cta'>Get Started Today</button>`,
        targetCSS: `.btn-cta { \n  background: linear-gradient(135deg, #6366f1, #a855f7);\n  color: white; border: none; padding: 15px 30px;\n  border-radius: 10px; font-weight: bold; cursor: pointer;\n  transition: 0.3s;\n}\n.btn-cta:hover { transform: scale(1.05); box-shadow: 0 10px 20px rgba(99,102,241,0.4); }`
    },
    {
        title: "Glassmorphism Card",
        topic: "Advanced CSS",
        description: "Design a semi-transparent glass card with a blur effect and a thin white border.",
        targetHTML: `<div class='glass-card'>\n  <h2>Glass Card</h2>\n  <p>Transparent and blurry.</p>\n</div>`,
        targetCSS: `.glass-card {\n  background: rgba(99, 102, 241, 0.1);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  padding: 30px; border-radius: 20px;\n  color: #1e293b;\n}`
    },
    {
        title: "Horizontal Navigation",
        topic: "Flexbox",
        description: "Build a navigation bar with a logo on the left and 4 links spread out on the right using space-between.",
        targetHTML: `<nav class='navbar'>\n  <div class='logo'>LOGO</div>\n  <div class='links'><a>Home</a><a>About</a><a>Work</a><a>Contact</a></div>\n</nav>`,
        targetCSS: `.navbar { display: flex; justify-content: space-between; align-items: center; padding: 20px; background: #1e293b; color: white; width: 100%; }\n.links a { margin-left: 20px; cursor: pointer; opacity: 0.8; }\n.links a:hover { opacity: 1; }`
    },
    {
        title: "Bouncing Loader",
        topic: "CSS Animations",
        description: "Animate three small dots to bounce up and down in a sequence to create a loading effect.",
        targetHTML: `<div class='loader'>\n  <span></span><span></span><span></span>\n</div>`,
        targetCSS: `.loader span {\n  display: inline-block; width: 10px; height: 10px;\n  background: #6366f1; border-radius: 50%;\n  margin: 0 5px; animation: bounce 0.6s infinite alternate;\n}\n.loader span:nth-child(2) { animation-delay: 0.2s; }\n.loader span:nth-child(3) { animation-delay: 0.4s; }\n@keyframes bounce { to { transform: translateY(-10px); } }`
    },
    {
        title: "3D Flip Card",
        topic: "Transforms",
        description: "Create a card that flips 180 degrees horizontally when hovered to show back content.",
        targetHTML: `<div class='flip-card'>\n  <div class='inner'>\n    <div class='front'>FRONT</div>\n    <div class='back'>BACK</div>\n  </div>\n</div>`,
        targetCSS: `.flip-card { perspective: 1000px; width: 200px; height: 100px; }\n.inner { position: relative; width: 100%; height: 100%; transition: 0.6s; transform-style: preserve-3d; }\n.flip-card:hover .inner { transform: rotateY(180deg); }\n.front, .back { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; display: flex; align-items: center; justify-content: center; background: #3b82f6; color: white; border-radius: 10px; }\n.back { transform: rotateY(180deg); background: #ec4899; }`
    },
    {
        title: "Responsive Grid Gallery",
        topic: "CSS Grid",
        description: "A 3-column image gallery that stacks into 1 column on mobile using grid-template-columns.",
        targetHTML: `<div class='gallery'>\n  <div class='item'>1</div><div class='item'>2</div><div class='item'>3</div>\n</div>`,
        targetCSS: `.gallery { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; width: 100%; }\n.item { height: 100px; background: #475569; border-radius: 8px; color: white; display: flex; align-items: center; justify-content: center; }\n@media (max-width: 600px) { .gallery { grid-template-columns: 1fr; } }`
    },
    {
        title: "Sticky Header",
        topic: "Positioning",
        description: "Make the header stay at the top of the screen as you scroll down the page.",
        targetHTML: `<div style='height: 150px; overflow-y: auto; border: 1px solid #ccc; width: 100%;'>\n  <header class='sticky-nav'>Sticky Nav</header>\n  <div style='height: 500px; padding: 20px;'>Scroll me down!</div>\n</div>`,
        targetCSS: `.sticky-nav { position: sticky; top: 0; background: #6366f1; color: white; padding: 10px; z-index: 10; font-weight: bold; }`
    },
    {
        title: "Pricing Table Card",
        topic: "Box Model",
        description: "A vertical pricing card with a header, large price text, and a list of features.",
        targetHTML: `<div class='price-card'>\n  <h3>PRO</h3>\n  <div class='price'>$29<span>/mo</span></div>\n  <ul style='list-style: none; padding: 0;'><li>✅ Feature A</li><li>✅ Feature B</li></ul>\n  <button style='margin-top: 15px; padding: 10px 20px; background: #6366f1; color: white; border: none; border-radius: 5px;'>Buy Now</button>\n</div>`,
        targetCSS: `.price-card { border: 1px solid #e2e8f0; padding: 30px; text-align: center; border-radius: 15px; background: #fff; width: 250px; }`
    },
    {
        title: "Floating Label Input",
        topic: "Forms",
        description: "A form input where the label sits inside and moves up when the user clicks or types.",
        targetHTML: `<div class='input-group'>\n  <input type='text' id='email' required>\n  <label for='email'>Email Address</label>\n</div>`,
        targetCSS: `.input-group { position: relative; margin: 20px 0; width: 100%; }\ninput { width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 5px; outline: none; }\nlabel { position: absolute; left: 10px; top: 10px; color: #999; transition: 0.3s; pointer-events: none; }\ninput:focus + label, input:valid + label { top: -20px; font-size: 12px; color: #6366f1; }`
    },
    {
        title: "Social Icon Set",
        topic: "Flexbox",
        description: "Align 4 social icons in a row with even spacing and a circular background that changes color on hover.",
        targetHTML: `<div class='socials'><span>f</span><span>t</span><span>i</span><span>l</span></div>`,
        targetCSS: `.socials { display: flex; gap: 15px; }\n.socials span { width: 40px; height: 40px; background: #334155; color: white; display: flex; align-items: center; justify-content: center; border-radius: 50%; cursor: pointer; transition: 0.3s; }\n.socials span:hover { background: #6366f1; }`
    },
    {
        title: "Tooltip on Hover",
        topic: "Positioning",
        description: "Create a simple text tooltip that appears above a link when the user hovers over it.",
        targetHTML: `<div class='tooltip-container'>Hover me <span class='tooltip'>Hello!</span></div>`,
        targetCSS: `.tooltip-container { position: relative; display: inline-block; cursor: pointer; color: #6366f1; font-weight: bold; }\n.tooltip { visibility: hidden; width: 80px; background: #000; color: #fff; text-align: center; padding: 5px; border-radius: 5px; position: absolute; bottom: 125%; left: 50%; transform: translateX(-50%); opacity: 0; transition: 0.3s; font-size: 0.8rem; }\n.tooltip-container:hover .tooltip { visibility: visible; opacity: 1; }`
    },
    {
        title: "Hero Gradient Section",
        topic: "Backgrounds",
        description: "A hero section with a diagonal gradient and centered text.",
        targetHTML: `<section class='hero'><h1>Creative Agency</h1></section>`,
        targetCSS: `.hero { height: 200px; width: 100%; background: linear-gradient(45deg, #0f172a, #334155); display: flex; align-items: center; justify-content: center; color: white; text-align: center; border-radius: 15px; }`
    },
    {
        title: "Pagination UI",
        topic: "Flexbox",
        description: "Design numbered pagination buttons with an active state highlighting the current page.",
        targetHTML: `<div class='pagination'><span>«</span><span>1</span><span class='active'>2</span><span>3</span><span>»</span></div>`,
        targetCSS: `.pagination { display: flex; gap: 5px; }\n.pagination span { padding: 8px 12px; border: 1px solid #ccc; cursor: pointer; border-radius: 4px; }\n.pagination .active { background: #6366f1; color: white; border-color: #6366f1; }`
    },
    {
        title: "Testimonial Bubble",
        topic: "Box Model",
        description: "A quote bubble with a small arrow pointing downwards towards an avatar.",
        targetHTML: `<div style='display: flex; flex-direction: column; align-items: center;'>\n  <div class='quote-box'>This changed my life!</div>\n  <div class='quote-tip'></div>\n</div>`,
        targetCSS: `.quote-box { background: #f1f5f9; padding: 20px; border-radius: 10px; position: relative; }\n.quote-tip { width: 0; height: 0; border-left: 10px solid transparent; border-right: 10px solid transparent; border-top: 10px solid #f1f5f9; }`
    },
    {
        title: "Animated Progress Bar",
        topic: "CSS Animations",
        description: "Create a progress bar container. The inner bar should animate from 0% to 80% on page load.",
        targetHTML: `<div class='progress-bar'><div class='fill'></div></div>`,
        targetCSS: `.progress-bar { width: 300px; height: 12px; background: #e2e8f0; border-radius: 6px; overflow: hidden; }\n.fill { height: 100%; background: #22c55e; width: 0; animation: fillProgress 2s forwards ease-out; }\n@keyframes fillProgress { to { width: 80%; } }`
    },
    {
        title: "Sidebar Icon Menu",
        topic: "Positioning",
        description: "A vertical sidebar that only contains icons and expands on hover to show labels.",
        targetHTML: `<div class='sidebar'>\n  <div class='item'><i>H</i> <span>Home</span></div>\n  <div class='item'><i>S</i> <span>Settings</span></div>\n</div>`,
        targetCSS: `.sidebar { width: 50px; background: #1e293b; color: white; transition: 0.3s; overflow: hidden; white-space: nowrap; height: 150px; border-radius: 10px; }\n.sidebar:hover { width: 120px; }\n.item { padding: 15px; display: flex; align-items: center; gap: 20px; cursor: pointer; }\n.item:hover { background: #334155; }`
    },
    {
        title: "News Card Overlay",
        topic: "Positioning",
        description: "An image card where the title and date are positioned on top of the image in a dark semi-transparent bar.",
        targetHTML: `<div class='news-card'>\n  <div class='overlay'><h3>Main Story</h3><p>Feb 25, 2026</p></div>\n</div>`,
        targetCSS: `.news-card { width: 250px; height: 150px; background: #6366f1; position: relative; border-radius: 10px; overflow: hidden; }\n.overlay { position: absolute; bottom: 0; width: 100%; background: rgba(0,0,0,0.6); color: white; padding: 10px; }\n.overlay h3 { margin: 0; font-size: 1rem; }\n.overlay p { margin: 5px 0 0; font-size: 0.8rem; }`
    },
    {
        title: "Z-Index Overlay Menu",
        topic: "Z-Index",
        description: "Launch a full-screen menu overlay that sits on top of all other content with a high z-index.",
        targetHTML: `<div class='screen-overlay'><h1>MENU</h1><p>(Z-INDEX: 100)</p></div>`,
        targetCSS: `.screen-overlay { width: 100%; height: 100%; background: #6366f1; z-index: 100; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white; }`
    },
    {
        title: "Accordion Section",
        topic: "HTML Basics",
        description: "Use semantic HTML elements to create a self-contained dropdown accordion for FAQs.",
        targetHTML: `<details style='width: 100%;'>\n  <summary>What is HTML?</summary>\n  <p style='padding: 10px; color: #666;'>HyperText Markup Language - the standard for web pages.</p>\n</details>`,
        targetCSS: `details { border: 1px solid #ccc; padding: 10px; border-radius: 5px; cursor: pointer; background: #fff; }\nsummary { font-weight: bold; outline: none; }`
    },
    {
        title: "Rotating Logo",
        topic: "CSS Animations",
        description: "Make a logo or icon rotate 360 degrees infinitely.",
        targetHTML: `<div class='spin-logo'>🌀</div>`,
        targetCSS: `.spin-logo { font-size: 3rem; display: inline-block; animation: spin 4s linear infinite; }\n@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`
    },
    {
        title: "Badge/Tag List",
        topic: "Flexbox",
        description: "A collection of small colorful 'tags' for categories that wrap naturally to the next line.",
        targetHTML: `<div class='tags'><span>Design</span><span>Code</span><span>Music</span><span>Tech</span><span>Art</span></div>`,
        targetCSS: `.tags { display: flex; flex-wrap: wrap; gap: 10px; }\n.tags span { background: #e2e8f0; padding: 5px 12px; border-radius: 15px; font-size: 0.8rem; font-weight: 600; }`
    },
    {
        title: "Dropdown Menu",
        topic: "Positioning",
        description: "A 'More' button that reveals a hidden list of links when hovered.",
        targetHTML: `<div class='dropdown'>\n  <button style='padding: 10px 20px; background: #1e293b; color: white; border: none; border-radius: 5px;'>More ▾</button>\n  <div class='menu'><a>Settings</a><a>Profile</a><a>Logout</a></div>\n</div>`,
        targetCSS: `.dropdown { position: relative; display: inline-block; }\n.menu { display: none; position: absolute; background: white; box-shadow: 0 5px 10px rgba(0,0,0,0.1); border-radius: 5px; width: 120px; z-index: 5; }\n.dropdown:hover .menu { display: block; }\n.menu a { display: block; padding: 10px; text-decoration: none; color: #333; cursor: pointer; }\n.menu a:hover { background: #f1f5f9; }`
    },
    {
        title: "CSS Grid Mosaic",
        topic: "CSS Grid",
        description: "A layout where different boxes have different heights and widths within a grid.",
        targetHTML: `<div class='mosaic'>\n  <div style='grid-column: span 2; background: #6366f1;'>Long</div>\n  <div style='grid-row: span 2; background: #a855f7;'>Tall</div>\n  <div style='background: #ec4899;'>Box</div><div style='background: #3b82f6;'>Box</div>\n</div>`,
        targetCSS: `.mosaic { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; width: 100%; }\n.mosaic div { padding: 20px; color: white; border-radius: 8px; text-align: center; }`
    },
    {
        title: "Newsletter Inline Form",
        topic: "Flexbox",
        description: "An email input and a 'Join' button joined together as a single unit.",
        targetHTML: `<div class='inline-form'><input placeholder='Enter email'><button>Join</button></div>`,
        targetCSS: `.inline-form { display: flex; }\ninput { border: 1px solid #ccc; border-radius: 5px 0 0 5px; padding: 10px; outline: none; width: 180px; }\nbutton { background: #6366f1; color: white; border: none; padding: 10px 20px; border-radius: 0 5px 5px 0; cursor: pointer; }`
    },
    {
        title: "Image Border Fade",
        topic: "Advanced CSS",
        description: "Apply a soft inner glow or fade to an image using box-shadow inset.",
        targetHTML: `<div class='img-fade'></div>`,
        targetCSS: `.img-fade { width: 250px; height: 150px; background: #6366f1; box-shadow: inset 0 0 50px rgba(0,0,0,0.6); border-radius: 10px; }`
    },
    {
        title: "Text Shadow Glow",
        topic: "Colors & Fonts",
        description: "Make a header text glow with multiple layers of text-shadow in neon colors.",
        targetHTML: `<h1 class='glow'>NEON LIGHTS</h1>`,
        targetCSS: `.glow { color: white; font-family: sans-serif; text-shadow: 0 0 10px #0ff, 0 0 20px #0ff; background: #000; padding: 20px; border-radius: 10px; }`
    },
    {
        title: "Pulse Animation",
        topic: "CSS Animations",
        description: "A circular dot that pulses with a wave effect around it.",
        targetHTML: `<div class='pulse-dot'></div>`,
        targetCSS: `.pulse-dot { width: 20px; height: 20px; background: #ef4444; border-radius: 50%; position: relative; }\n.pulse-dot::after { content: ''; position: absolute; width: 100%; height: 100%; top: 0; left: 0; background: #ef4444; border-radius: 50%; animation: pulseWave 1.5s infinite; opacity: 0.5; }\n@keyframes pulseWave { to { transform: scale(3); opacity: 0; } }`
    },
    {
        title: "Card Hover Zoom",
        topic: "Transforms",
        description: "An image inside a card that zooms in slightly when the card is hovered.",
        targetHTML: `<div class='zoom-card'><div class='img-placeholder'></div></div>`,
        targetCSS: `.zoom-card { width: 200px; height: 200px; overflow: hidden; border-radius: 10px; background: #ccc; }\n.img-placeholder { width: 100%; height: 100%; background: #6366f1; transition: 0.5s; }\n.zoom-card:hover .img-placeholder { transform: scale(1.2); }`
    },
    {
        title: "Blurry Header Overlay",
        topic: "Advanced CSS",
        description: "A header that stays at the top with a 'glass' blur effect.",
        targetHTML: `<div style='height: 150px; overflow-y: auto; width: 100%; position: relative;'>\n  <nav class='blur-nav'>Glass Menu</nav>\n  <div style='padding-top: 60px; color: #666;'>Background content scrolling behind the blurry glass menu...</div>\n</div>`,
        targetCSS: `.blur-nav { position: absolute; top: 0; width: 100%; padding: 15px; background: rgba(255,255,255,0.7); backdrop-filter: blur(10px); text-align: center; font-weight: bold; border-bottom: 1px solid rgba(0,0,0,0.1); }`
    }
];

// Shuffle function
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const tasks = shuffle([...taskPool]);

const taskGrid = document.getElementById('taskGrid');
const nameModal = document.getElementById('nameModal');
const taskModal = document.getElementById('taskModal');
const userNameInput = document.getElementById('userName');
const startBtn = document.getElementById('startBtn');
const timerDisplay = document.getElementById('timerDisplay');
const taskDescription = document.getElementById('taskDescription');
const taskTopic = document.getElementById('taskTopic');
const modalTaskTitle = document.getElementById('modalTaskTitle');
const closeTaskBtn = document.getElementById('closeTaskBtn');
const timeAlert = document.getElementById('timeAlert');

let currentTask = null;
let timerInterval = null;
let totalSeconds = 15 * 60; // 15 minutes
const overtimeSeconds = 3 * 60; // 3 minutes
let isOvertime = false;
let userName = "";

// Initialize Grid
function initGrid() {
    taskGrid.innerHTML = ""; // Clear existing
    for (let i = 1; i <= 30; i++) {
        const card = document.createElement('div');
        card.className = 'card-num';
        card.innerText = i;
        card.addEventListener('click', () => openNameModal(i));
        taskGrid.appendChild(card);
    }
}

function openNameModal(taskIndex) {
    currentTask = tasks[taskIndex - 1];
    nameModal.classList.add('active');
    userNameInput.focus();
}

userNameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') startBtn.click();
});

startBtn.addEventListener('click', () => {
    userName = userNameInput.value.trim();
    if (userName === "") {
        alert("Please enter your name!");
        return;
    }
    nameModal.classList.remove('active');
    startTask();
});

function startTask() {
    modalTaskTitle.innerText = `${userName}'s Challenge`;

    // Build rich task description without code hints
    let content = `<h3 style='color: var(--accent-1); margin-bottom: 0.5rem; font-size: 1.8rem;'>${currentTask.title}</h3>`;
    content += `<div style='background: rgba(var(--primary-rgb), 0.1); padding: 0.5rem 1rem; border-radius: 0.5rem; display: inline-block; margin-bottom: 1.5rem; border: 1px solid var(--glass-border);'>`;
    content += `<span style='color: var(--accent-2); font-weight: 600; font-size: 0.9rem;'>TOPIC: ${currentTask.topic}</span>`;
    content += `</div>`;

    content += `<p style="margin: 0.5rem 0 1.5rem; line-height: 1.8; color: #e2e8f0; font-size: 1.1rem;">${currentTask.description}</p>`;

    content += `<div style='text-align: left; background: rgba(0,0,0,0.3); padding: 2rem; border-radius: 1.5rem; border: 1px solid var(--glass-border);'>`;
    content += `<h4 style='font-size: 0.9rem; margin-bottom: 1rem; text-transform: uppercase; color: var(--accent-1); letter-spacing: 1px;'>Success Criteria</h4>`;

    content += `<ul style='margin-left: 1.5rem; color: #cbd5e1; line-height: 2;'>`;
    content += `<li>Replicate the design using proper semantic HTML.</li>`;
    content += `<li>Apply accurate CSS styling as described.</li>`;
    content += `<li>Ensure responsiveness and smooth animations where applicable.</li>`;
    content += `<li>Maintain a clean and professional code structure.</li>`;
    content += `</ul>`;
    content += `</div>`;

    content += `<div style='margin-top: 2rem; padding: 1rem; background: rgba(16, 185, 129, 0.1); border-radius: 1rem; border: 1px dashed #10b981;'>`;
    content += `<p style='margin: 0; color: #10b981; font-weight: 600;'>Pro Tip: Focus on the ${currentTask.topic} concepts learned in class!</p>`;
    content += `</div>`;

    taskDescription.innerHTML = content;
    taskTopic.innerText = currentTask.topic;

    taskModal.classList.add('active');
    startTimer();
}

function startTimer() {
    clearInterval(timerInterval);
    totalSeconds = 15 * 60;
    isOvertime = false;
    timerDisplay.classList.remove('overtime');
    updateTimerDisplay();

    timerInterval = setInterval(() => {
        totalSeconds--;

        if (totalSeconds <= 0) {
            if (!isOvertime) {
                // Start overtime
                isOvertime = true;
                totalSeconds = overtimeSeconds;
                timerDisplay.classList.add('overtime');
                alert("Overtime! You have 3 minutes left to finish your replication.");
            } else {
                // Overtime finished
                clearInterval(timerInterval);
                showTimeElapsed();
            }
        }
        updateTimerDisplay();
    }, 1000);
}

function updateTimerDisplay() {
    const mins = Math.floor(Math.abs(totalSeconds) / 60);
    const secs = Math.floor(Math.abs(totalSeconds) % 60);
    const prefix = isOvertime ? "OVERTIME " : "";
    timerDisplay.innerText = `${prefix}${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function showTimeElapsed() {
    taskModal.classList.remove('active');
    timeAlert.style.display = 'flex';
}

closeTaskBtn.addEventListener('click', () => {
    if (confirm("Are you sure you want to exit? The timer will stop.")) {
        clearInterval(timerInterval);
        taskModal.classList.remove('active');
        userNameInput.value = ""; // Reset for next person
    }
});

initGrid();
