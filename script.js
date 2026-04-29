// ── Task Data ──
const tasks = [
  { id: 1, name: 'C++ Pointers Assignment',     subject: 'PAT_CPP',    due: 'Apr 20', status: 'done'    },
  { id: 2, name: 'DBMS_PREP Test 2',            subject: 'DBMS',       due: 'Apr 25', status: 'done'    },
  { id: 3, name: 'Python Basics (Wisconsin)',    subject: 'Python Lab', due: 'Apr 26', status: 'done'    },
  { id: 4, name: 'Web Dev Project (Internship)', subject: 'Web Dev',    due: 'May 5',  status: 'inprog'  },
  { id: 5, name: 'OOP Lab Report',              subject: 'PAT_CPP',    due: 'May 1',  status: 'inprog'  },
  { id: 6, name: 'Java Sliding Window Problem', subject: 'DSA',        due: 'May 3',  status: 'inprog'  },
  
];

// ── Status Mappings ──
const statusLabel = {
  done:    'Completed',
  inprog:  'In Progress',
  pending: 'Pending',
  review:  'In Review',
};

const badgeClass = {
  done:    'badge-done',
  inprog:  'badge-inprog',
  pending: 'badge-pending',
  review:  'badge-review',
};

const checkClass = {
  done:    'done',
  inprog:  'inprog',
  pending: '',
  review:  'review',
};

const checkIcon = {
  done:    '✓',
  inprog:  '↻',
  pending: '',
  review:  '~',
};

// ── State ──
let currentFilter = 'all';

// ── Render Task List ──
function renderTasks() {
  const list = document.getElementById('task-list');
  const filtered = currentFilter === 'all'
    ? tasks
    : tasks.filter(t => t.status === currentFilter);

  if (filtered.length === 0) {
    list.innerHTML = `
      <div style="text-align:center; padding:2rem; color:var(--muted); font-size:14px;">
        No tasks in this category.
      </div>`;
    return;
  }

  list.innerHTML = filtered.map(t => `
    <div class="task-item">
      <div class="task-check ${checkClass[t.status]}">${checkIcon[t.status]}</div>
      <div class="task-info">
        <div class="task-name ${t.status === 'done' ? 'strike' : ''}">${t.name}</div>
        <div class="task-meta">${t.subject} &nbsp;·&nbsp; Due ${t.due}</div>
      </div>
      <span class="badge ${badgeClass[t.status]}">${statusLabel[t.status]}</span>
    </div>
  `).join('');
}

// ── Filter Tasks ──
function filterTasks(filter, btn) {
  currentFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderTasks();
}

// ── Navigate Between Pages ──
function navigate(page, btn) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  btn.classList.add('active');
}

// ── Init ──
renderTasks();
