import React from 'react';

import classes from './Input.css';

const input = props => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
      inputClasses.push(classes.Invalid);
    } else if (props.touched) {
      inputClasses.push(classes.Valid);
    }

    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <input
                {...props.elementConfig}
                className={inputClasses.join(' ')}
                value={props.value}
                    onChange={props.changed}
                />;
            break;
        case ( 'textarea'):
            inputElement = <textarea
                {...props.elementConfig}
                className={inputClasses.join(' ')}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'select'):
                inputElement = <select
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed} >
                        {props.elementConfig.options.map(option => (
                            <option
                                key={option.value}
                                value={option.value}>{option.displayValue}</option>
                        ))}
                    </select>;
                break;
        case ('radio'):
                  inputElement =
                  <div style={{ display: 'inline', float: 'right' }}>
                    <input id="toggle-on" className={classes.toggle + ' ' + classes.toggleLeft} name="toggle" value="false" type="radio" checked />
                    <label htmlFor="toggle-on" className={classes.btn}>Yes</label>
                    <input id="toggle-off" className={classes.toggle + ' ' + classes.toggleRight} name="toggle" value="true" type="radio" />
                    <label htmlFor="toggle-off" className={classes.btn}>No</label>
                  </div>;
                break;
        case ( 'select2'):
                inputElement =
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <select
                      className={inputClasses.join(' ') + ' ' +  classes.selectTwo}
                      value={props.value}
                      onChange={props.changed} >
                          {props.elementConfig.options.map(option => (
                              <option
                                  key={option.value}
                                  value={option.value}>{option.displayValue}</option>
                          ))}
                    </select>

                    <select
                        className={inputClasses.join(' ') + ' ' +  classes.selectTwo}
                        value={props.value}
                        onChange={props.changed} >
                            {props.elementConfig.options.map(option => (
                                <option
                                    key={option.value}
                                    value={option.value}>{option.displayValue}</option>
                            ))}
                    </select>
                  </div>
                    ;
                break;
        default:
            inputElement = <input
                {...props.elementConfig}
                className={inputClasses.join(' ')}
                value={props.value} />
    }

    return (
        <div className={classes.Input} style={{ textAlign: 'left' }}>
            <label
                  className={classes.Label}
                  style={{ display: 'inline' }}>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default input;
