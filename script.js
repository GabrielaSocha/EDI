document.addEventListener('DOMContentLoaded', function () {
    var members = document.querySelectorAll('.member');

    members.forEach(function (member) {
        member.addEventListener('click', function () {
            this.querySelector('.member-details').classList.toggle('show-details');
        });
    });
});
