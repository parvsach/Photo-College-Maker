 $(document).ready(function () {
            $(".drag").draggable({
                helper: 'clone',
                revert: 'invalid'
            });
            $("#droppa").droppable({
                accept: function (e) {
                    return '#' + e[0].id; // '#'+e.context.attributes.id.nodeValue;
                },
                drop: function (e, ui) {
                    var status = false;
                    $.each(this.children, function (index, value) {
                        if (value.currentSrc == ui.draggable[0].currentSrc) {
                            status = true;
                        }
                    });
                    if (!status) {
                        $(this).append($(ui.draggable).clone());
                        $(ui.draggable).resizable();
                    }
                    $('#' + ui.draggable[0].id).draggable({ containment: '#droppa', cursor: "move", cursorAt: { top: 56, left: 56 } });

                }
            });

            $("body").on('mouseenter', '.img-nav', function (e) {
                $(e.target).draggable({
                    helper: 'clone',
                    revert: 'invalid'
                });
            });

            $("body").on('click', '#droppa', function (e) {
                if (e.target.id.indexOf('show') != -1) {
                    $(e.target).toggleClass('active');
                    if ($(e.target)[0].className.indexOf('active') != -1) {
                        $('#image_id').val(e.target.id);
                    } else {
                        $('#image_id').val('');
                    }
                }
            });

         $('body').keyup(function (e) {
                if (e.keyCode == 46) {
                    angular.element($("#myCtrl")).scope().deleteImage($('#image_id').val());
                }
            });

        });

