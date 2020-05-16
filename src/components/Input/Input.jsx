import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

const Input = ({
  className, classNameLabel, classNameError, classWrapper, id, error, label, ...props
}) => {

  if(error) {
    className += ' error-border';
  }
return <div className='wrapper-input'>
            {label
                && <label className={classNameLabel} htmlFor={id}>{label}</label>
            }
            <input id={id} className={className} {...props} />
            {error
            && <small id={id} className="error-text">{error}</small>
            }
      </div>};

Input.propTypes = {
  className: PropTypes.string,
};
Input.defaultProps = {

};
export default Input;