var myApp = angular.module('myApp', []);


function FileUploadCtrl($scope) {
    $scope.stepsModel = [];

    $scope.imageUpload = function (element) {
        var reader = new FileReader();
        reader.onload = $scope.imageIsLoaded;
        if (element.files[0] != undefined) {
            reader.readAsDataURL(element.files[0]);
        }
    }

    $scope.imageIsLoaded = function (e) {
        $scope.$apply(function () {
            $scope.stepsModel.push(e.target.result);
        });
    }

    $scope.selectIdx = -1;

    $scope.AddBorder = function ($index) {
        if ($scope.selectIdx === $index) {
            $scope.selectIdx = -1;
        } else {
            $scope.selectIdx = $index;
        }
        $('#image_id').val($scope.selectIdx);
    };

    $scope.deleteImage = function ($index) {
        if ($index.indexOf('show') != -1) {
            $('#' + $index).remove();
        } else {
            if ($index != -1 && $index != '' && $index != undefined) {
                $scope.$apply(function () {
                    $scope.stepsModel.splice($index, 1);
                    $('#UploadFile')[0].value = "";
                });
            } else {
                alert('Select an Image for delete');
            }
            $index = -1;
        }
    };
    //$scope.prev = function () {
    //    $('#slideshow_image').fadeOut(300, function () {
    //        var prev_val = document.getElementById("img_no").value;
    //        var prev_val = Number(prev_val) - 1;
    //        if (prev_val <= -1) {
    //            prev_val = $scope.stepsModel.length - 1;
    //        }
    //        $('#slideshow_image').attr('src', $scope.stepsModel[prev_val]);
    //        document.getElementById("img_no").value = prev_val;
    //    });
    //    $('#slideshow_image').fadeIn(1000);
    //};
    $scope.next = function () {
        $('#show_0').fadeOut(300, function () {
            var next_val = document.getElementById("img_no").value;
            var next_val = Number(next_val) + 1;
            if (next_val >= $scope.stepsModel.length) {
                next_val = 0;
            }
            $('#show_0').attr('src', $scope.stepsModel[next_val]);
            document.getElementById("img_no").value = next_val;
        });
        $('#show_0').fadeIn(1000);
    };
}