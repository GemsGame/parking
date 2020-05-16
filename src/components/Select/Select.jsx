import React from 'react';
import PropTypes from 'prop-types';
import './Select.scss';

const Select = ({
    id, className, options, value, optionHeader, onChange, ...props
}) => {
    let opt;
    if (optionHeader) {
        opt = <option value="">{optionHeader}</option>;
    }
    return <div className="select-wrapper">
        <select id={id} className={className} onChange={onChange} {...props}>
         {opt}
            {options.map((item, i) => <option key={i} value={item.id}> {item.name}</option>)}
        </select>
    </div>
}

Select.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    options: PropTypes.array,
};
Select.defaultProps = {
    id: 'someid',
    className: '',
    options: [{ id: '1', name: 'car' }],
};

export default Select;
