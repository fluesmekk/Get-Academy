function changePage(value) {
    if (model.app.currentUser == '') {
        if (value == 'log in') {
            model.app.currentPage = 'log in'
        }
        else if (value != 'log in') {
            alert('Du må logge inn');
            return;
        }

    }
    if (model.app.currentUser == 'Admin') {
        model.app.currentPage = value;
        drawPage();
        updateView();
    }
     else if (model.app.currentUser != 'Admin' && (value == 'vote' || value == 'log in')) {
        model.app.currentPage = value;
    }
    else {
        alert('Du har ikke tilgang')
    }
    model.drawnPage = '';
    setTimeout(drawPage(), 2000)
    setTimeout(updateView(), 2000);
}