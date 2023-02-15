; (function(){

  function handleFormSubmit(event) {
    // Просим форму не отправлять данные самостоятельно
    event.preventDefault()
    console.log('Подписка на рассылку!')
  }

  const requestForm = document?.getElementById('form-request')
  requestForm?.addEventListener('submit', handleFormSubmit)

  function checkValidity(event) {
    const formNode = event.target.form
    const isValid = formNode.checkValidity()

    formNode.querySelector('button').disabled = !isValid
  }

  requestForm?.addEventListener('input', checkValidity)

})();

; (function(){

  function handleFormSubmit(event) {
    // Просим форму не отправлять данные самостоятельно
    event.preventDefault()
    console.log('Заявка на опт!')
  }

  const wholesaleForm = document?.getElementById('form-wholesale')
  wholesaleForm?.addEventListener('submit', handleFormSubmit)

  function checkValidity(event) {
    const formNode = event.target.form
    const isValid = formNode.checkValidity()

    formNode.querySelector('button').disabled = !isValid
  }

  wholesaleForm?.addEventListener('input', checkValidity)

})();

; (function(){

  function handleFormSubmit(event) {
    // Просим форму не отправлять данные самостоятельно
    event.preventDefault()
    console.log('Отправка заказа!')
  }

  const wholesaleForm = document?.getElementById('form-checkout')
  wholesaleForm?.addEventListener('submit', handleFormSubmit)

  function checkValidity(event) {
    const formNode = event.target.form
    const isValid = formNode.checkValidity()

    formNode.querySelector('button').disabled = !isValid
  }

  wholesaleForm?.addEventListener('input', checkValidity)

})();

; (function(){

  function handleFormSubmit(event) {
    // Просим форму не отправлять данные самостоятельно
    event.preventDefault()
    console.log('Заявка купить в 1 клик!')
  }

  const wholesaleForm = document?.getElementById('buy-click')
  wholesaleForm?.addEventListener('submit', handleFormSubmit)

  function checkValidity(event) {
    const formNode = event.target.form
    const isValid = formNode.checkValidity()

    formNode.querySelector('button').disabled = !isValid
  }

  wholesaleForm?.addEventListener('input', checkValidity)

})();

; (function(){

  function handleFormSubmit(event) {
    // Просим форму не отправлять данные самостоятельно
    event.preventDefault()
    console.log('Заявка на рассрочку!')
  }

  const wholesaleForm = document?.getElementById('credit')
  wholesaleForm?.addEventListener('submit', handleFormSubmit)

  function checkValidity(event) {
    const formNode = event.target.form
    const isValid = formNode.checkValidity()

    formNode.querySelector('button').disabled = !isValid
  }

  wholesaleForm?.addEventListener('input', checkValidity)

})();
