// تحديث شامل للميزات التفاعلية لصفحة الأسئلة الشائعة

document.addEventListener('DOMContentLoaded', function () {
    // Toggle answer visibility and icon rotation
    document.querySelectorAll('.question').forEach(function (q, idx) {
        q.addEventListener('click', function () {
            const answer = q.nextElementSibling;
            const icon = q.querySelector('.toggle-icon');
            if (answer.classList.contains('show')) {
                answer.classList.remove('show');
                q.classList.remove('open');
                if (icon) icon.style.transform = '';
            } else {
                // إغلاق جميع الإجابات الأخرى
                document.querySelectorAll('.answer').forEach(a => a.classList.remove('show'));
                document.querySelectorAll('.question').forEach(qq => qq.classList.remove('open'));
                document.querySelectorAll('.toggle-icon').forEach(ic => ic.style.transform = '');
                answer.classList.add('show');
                q.classList.add('open');
                if (icon) icon.style.transform = 'rotate(45deg)';
            }
        });
    });

    // نسخ الإجابة مع رسالة نجاح
    document.querySelectorAll('.copy-answer').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            const answer = btn.parentElement.innerText.replace('نسخ الإجابة', '').trim();
            navigator.clipboard.writeText(answer);
            btn.textContent = 'تم النسخ!';
            btn.classList.add('copied');
            setTimeout(() => {
                btn.textContent = 'نسخ الإجابة';
                btn.classList.remove('copied');
            }, 1200);
        });
    });

    // بحث ديناميكي في الأسئلة
    const searchInput = document.getElementById('faq-search');
    const faqList = document.getElementById('faq-list');
    const noResults = document.getElementById('no-results');
    searchInput.addEventListener('input', function () {
        const val = searchInput.value.trim();
        let found = false;
        document.querySelectorAll('.faq-item').forEach(function (item) {
            const q = item.querySelector('.question').innerText;
            if (q.includes(val)) {
                item.style.display = '';
                found = true;
            } else {
                item.style.display = 'none';
            }
        });
        noResults.classList.toggle('hidden', found);
    });

    // إضافة سؤال وجواب ديناميكيًا
    const addBtn = document.getElementById('add-faq-btn');
    const addForm = document.getElementById('add-faq-form');
    const cancelAdd = document.getElementById('cancel-add');
    addBtn.addEventListener('click', function () {
        addForm.classList.remove('hidden');
        addBtn.style.display = 'none';
    });
    cancelAdd.addEventListener('click', function () {
        addForm.classList.add('hidden');
        addBtn.style.display = '';
        addForm.reset();
    });
    addForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const q = document.getElementById('new-question').value.trim();
        const a = document.getElementById('new-answer').value.trim();
        if (!q || !a) return;
        const count = document.querySelectorAll('.faq-item').length + 1;
        const item = document.createElement('div');
        item.className = 'faq-item';
        item.innerHTML = `<div class="question"><span class="q-icon">${count}</span>${q} <img src='./imgs/add.png' class='toggle-icon' alt='عرض الإجابة' title='عرض الإجابة'></div><div class="answer">${a.replace(/\n/g, '<br>')}<button class='copy-answer' title='نسخ الإجابة'>نسخ الإجابة</button></div>`;
        faqList.appendChild(item);
        // إعادة تفعيل الأحداث
        item.querySelector('.question').addEventListener('click', function () {
            const answer = item.querySelector('.answer');
            const icon = item.querySelector('.toggle-icon');
            if (answer.classList.contains('show')) {
                answer.classList.remove('show');
                item.querySelector('.question').classList.remove('open');
                if (icon) icon.style.transform = '';
            } else {
                document.querySelectorAll('.answer').forEach(a => a.classList.remove('show'));
                document.querySelectorAll('.question').forEach(qq => qq.classList.remove('open'));
                document.querySelectorAll('.toggle-icon').forEach(ic => ic.style.transform = '');
                answer.classList.add('show');
                item.querySelector('.question').classList.add('open');
                if (icon) icon.style.transform = 'rotate(45deg)';
            }
        });
        item.querySelector('.copy-answer').addEventListener('click', function (e) {
            e.stopPropagation();
            const answer = item.querySelector('.answer').innerText.replace('نسخ الإجابة', '').trim();
            navigator.clipboard.writeText(answer);
            this.textContent = 'تم النسخ!';
            this.classList.add('copied');
            setTimeout(() => {
                this.textContent = 'نسخ الإجابة';
                this.classList.remove('copied');
            }, 1200);
        });
        addForm.classList.add('hidden');
        addBtn.style.display = '';
        addForm.reset();
    });
});
