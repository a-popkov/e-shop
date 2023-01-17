; (function(){

  function handleFormSubmit(event) {
    // Просим форму не отправлять данные самостоятельно
    event.preventDefault()
    console.log('Отправка!')
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
    console.log('Отправка!')
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
