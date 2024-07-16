$('#imageModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var src = button.data('src');
    var title = button.data('title');
    var description = button.data('description');
    var modal = $(this);
    modal.find('.modal-body img').attr('src', src);
    modal.find('#modalTitle').text(title);
    modal.find('#modalDescription').text(description);
});

$(document).ready(function () {
    $('.navbar-toggler').click(function () {
        var icon = $(this).find('i');
        icon.toggleClass('fa-bars fa-times');
    });
});