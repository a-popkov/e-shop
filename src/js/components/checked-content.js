const pickup = document.getElementById('pickup');
const delivery = document.getElementById('delivery');
const pickupContent = document.getElementById('pickup-content');
const deliveryContent = document.getElementById('delivery-content');

pickup?.addEventListener('click', (e) => {
  pickupContent?.classList.add('checked-content--active');

  if (pickupContent?.classList.contains('checked-content--active')) {
    deliveryContent.classList.remove('checked-content--active');
  } else {

    }
});

delivery?.addEventListener('click', (e) => {
  deliveryContent?.classList.add('checked-content--active');


  if (deliveryContent?.classList.contains('checked-content--active')) {
    pickupContent.classList.remove('checked-content--active');
  } else {

    }
});

pickup?.click()
