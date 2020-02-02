import React, { Component } from 'react';

import classes from './BasicDetails.css';
import Button from '../../component/UI/Button/Button';
import Input from '../../component/UI/Input/Input';
import Spinner from '../../component/UI/Spinner/Spinner';
import Aux from '../../hoc/Auxiliary/Auxiliary';

class BasicDetails extends Component {
    state = {
        basicDetailsForm: {
            name: {
                elementLabel: 'Name',
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Satyajit'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementLabel: 'Email id',
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'abcd@gmail.com'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            location: {
                elementLabel: 'Preferred Location',
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'kolkata', displayValue: 'Kolkata'},
                        {value: 'chennai', displayValue: 'Chennai'}
                    ]
                },
                value: 'e.g. Kolkata, chennai',
                touched: false,
                valid: true
            },
            studio: {
                elementLabel: 'Do you own a studio?',
                elementType: 'radio',
                elementConfig: {
                    options: [
                        {value: 'kolkata', displayValue: 'Kolkata'},
                        {value: 'chennai', displayValue: 'Chennai'}
                    ]
                },
                value: 'e.g. Kolkata, chennai',
                touched: false,
                valid: true
            },
            camera: {
                elementLabel: 'Select your camera',
                elementType: 'select2',
                elementConfig: {
                    options: [
                        {value: 'Select brand', displayValue: 'Select brand'},
                        {value: 'Canon', displayValue: 'Canon'},
                        {value: 'Nikon', displayValue: 'Nikon'}
                    ]
                },
                value: 'Select brand',
                touched: false,
                valid: true
            },
            lens: {
                elementLabel: 'Select Lens',
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'Select brand', displayValue: 'Select brand'}
                    ]
                },
                value: 'Select brand',
                touched: false,
                valid: true
            },
            equipment: {
                elementLabel: 'Others Equipment',
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'Select equipment', displayValue: 'Select equipment'},
                    ]
                },
                value: 'Select Equipment',
                touched: false,
                valid: true
            }
        },
        loading: false,
        formIsValid: false
    }

    checkValidity = (value, rules) => {
        let isValid = true;

        if (!rules) {
            return true;
        }
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }

        return isValid;
    }

    inputChangedHandler = ( event, inputIdentifier ) => {
        const updatedbasicDetailsForm = {
            ...this.state.basicDetailsForm
        };
        const updatedFormElement = {
            ...updatedbasicDetailsForm[inputIdentifier]
        }

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
        updatedFormElement.touched = true;

        updatedbasicDetailsForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for(let inputIdentifier in updatedbasicDetailsForm) {
            formIsValid = updatedbasicDetailsForm[inputIdentifier].valid && formIsValid;
        }

        this.setState({basicDetailsForm: updatedbasicDetailsForm, formIsValid: formIsValid});
    }

    render () {
        const formElementsArray = [];
        for(let key in this.state.basicDetailsForm) {
            formElementsArray.push({
                id: key,
                config: this.state.basicDetailsForm[key]
            })
        }

        let form =
            <form onSubmit={this.orderHandler}
                  className={classes.BasicDetailsForm}>
                {formElementsArray.map(formElement => (
                    <Aux>
                      <Input
                          key={formElement.id}
                          elementType={formElement.config.elementType}
                          elementConfig={formElement.config.elementConfig}
                          value={formElement.config.value}
                          invalid={!formElement.config.valid}
                          shouldValidate={formElement.config.validation}
                          touched={formElement.config.touched}
                          changed={(event) => this.inputChangedHandler(event, formElement.id)}
                          label={formElement.config.elementLabel}>
                          </Input>
                    </Aux>
                ))}
                <Button
                    btnType='Success'>
                    Save & next
                    <i className="fas fa-arrow-right"
                       style={{ marginLeft: '1rem' }}></i>
                </Button>
            </form>;

        if (this.state.loading)
            form = <Spinner></Spinner>

        return (
            <div className={classes.BasicDetails + ' ' + 'container'}>
                {form}
            </div>
        );
    }
}

export default BasicDetails;
