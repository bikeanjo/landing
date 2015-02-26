(function () {
   'use strict';

    $(function () {
        var frm = $('#mailing');
        frm.submit(function () {
            $.ajax({
                type: frm.attr('method'),
                url: frm.attr('action'),
                data: frm.serialize(),
                success: function (data) {
                    console.log(data);
                    if (data.success) {
                        alert('sucesso');
                    }
                },
                error: function(data) {
                    console.log(data);
                }
            });
            return false;
        });
    });
})();
