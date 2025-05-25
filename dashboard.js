// لوحة تحكم تفاعلية: تبديل التبويبات، جلب الأسئلة والمستخدمين، حذف وتعديل

document.addEventListener('DOMContentLoaded', function () {
    // تبويبات
    const tabFaqs = document.getElementById('tab-faqs');
    const tabUsers = document.getElementById('tab-users');
    const faqsSection = document.getElementById('faqs-section');
    const usersSection = document.getElementById('users-section');

    tabFaqs.addEventListener('click', function () {
        tabFaqs.classList.add('active');
        tabUsers.classList.remove('active');
        faqsSection.classList.remove('hidden');
        usersSection.classList.add('hidden');
    });
    tabUsers.addEventListener('click', function () {
        tabUsers.classList.add('active');
        tabFaqs.classList.remove('active');
        usersSection.classList.remove('hidden');
        faqsSection.classList.add('hidden');
    });

    // جلب الأسئلة من الباك اند
    function loadFaqs() {
        fetch('dashboard_backend.php?action=get_faqs')
            .then(res => res.json())
            .then(data => {
                const tbody = document.querySelector('#faqs-table tbody');
                tbody.innerHTML = '';
                data.forEach(faq => {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `<td>${faq.question}</td><td>${faq.answer}</td><td>
                        <button class='action-btn delete' data-id='${faq.id}'>حذف</button>
                    </td>`;
                    tbody.appendChild(tr);
                });
                // حذف سؤال
                document.querySelectorAll('.action-btn.delete').forEach(btn => {
                    btn.onclick = function () {
                        if(confirm('هل أنت متأكد من حذف السؤال؟')) {
                            fetch('dashboard_backend.php?action=delete_faq&id=' + btn.dataset.id)
                                .then(() => loadFaqs());
                        }
                    };
                });
            });
    }
    loadFaqs();

    // إضافة سؤال جديد
    document.getElementById('add-faq-admin-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const q = document.getElementById('admin-question').value.trim();
        const a = document.getElementById('admin-answer').value.trim();
        if(!q || !a) return;
        fetch('dashboard_backend.php?action=add_faq', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: `question=${encodeURIComponent(q)}&answer=${encodeURIComponent(a)}`
        }).then(() => {
            loadFaqs();
            this.reset();
        });
    });

    // جلب المستخدمين
    function loadUsers() {
        fetch('dashboard_backend.php?action=get_users')
            .then(res => res.json())
            .then(data => {
                const tbody = document.querySelector('#users-table tbody');
                tbody.innerHTML = '';
                data.forEach(user => {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `<td>${user.username}</td><td>${user.email}</td><td>
                        <button class='action-btn delete' data-id='${user.id}'>حذف</button>
                    </td>`;
                    tbody.appendChild(tr);
                });
                // حذف مستخدم
                document.querySelectorAll('#users-table .action-btn.delete').forEach(btn => {
                    btn.onclick = function () {
                        if(confirm('هل أنت متأكد من حذف المستخدم؟')) {
                            fetch('dashboard_backend.php?action=delete_user&id=' + btn.dataset.id)
                                .then(() => loadUsers());
                        }
                    };
                });
            });
    }
    loadUsers();

    tabUsers.addEventListener('click', loadUsers);
    tabFaqs.addEventListener('click', loadFaqs);
});
