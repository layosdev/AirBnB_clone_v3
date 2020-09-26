$(function () {
    const amenitiesList = []
    const namesList = []
    $('.amenities ul li').change( () => {
        if ($('.amenities ul li input').is(':checked')){
            amenitiesList.push($('.amenities ul li input').attr('data-id'));
            namesList.push($('.amenities ul li input').attr('data-name'))
            // console.log('GUARDADO!')
        }
        else {
            const index = amenitiesList.indexOf($('.amenities ul li input').attr('data-id'))
            if (index > -1){
                amenitiesList.splice(index, 1);
                namesList.splice(index, 1);
                // console.log('BORRADO')
            }
        }
        console.log(amenitiesList)
        console.log(namesList)

    });
});
