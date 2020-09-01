export function createControl(config, validation) {
    return {
        ...config,
        validation,
        valid: !validation,
        touched: false,
        value: ''
    }
}

export function validate(value, validation = null) {
    if(!validation) {
        return true
    }
    let isValid = true

    if(validation.required) {
        isValid = value.trim() !== '' && isValid
    }

    return isValid
}

export function validateForm(formContorls) {
    let isFormValid = true

    for(let control in formContorls) {
        if(formContorls.hasOwnProperty(control)){
            isFormValid = formContorls[control].valid && isFormValid
        }
    }

    return isFormValid
}