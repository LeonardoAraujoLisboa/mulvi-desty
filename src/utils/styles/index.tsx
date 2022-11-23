export const colorStyles: any = {
    control: (styles: Object, {isFocused}: any) => ({
      ...styles,
      backgroundColor: '#fff',
      height: '48px',
      width: '250px',
      border: '1px solid #A5AAB4',
      outline: isFocused === true && '1px solid #A5AAB4',
      '&:hover': {
        border: '1px solid #A5AAB4'
      },
      borderRadius: '12px',
    }),
    singleValue: (styles: Object) => ({
      ...styles,
      color: '#141923'
    }),
    menu: (styles: Object) => ({
      ...styles,
      backgroundColor: '#fff'
    }),
    dropdownIndicator: (styles: Object) => ({
      ...styles,
      color: '#46505A'
    }),
    indicatorSeparator: (styles: Object) => ({
      ...styles,
      display: 'none'
    }),
}

export const colorStylesInstalments: any = {
    control: (styles: Object, {isFocused}: any) => ({
      ...styles,
      backgroundColor: '#fff',
      height: '48px',
      width: '100px',
      border: '1px solid #A5AAB4',
      outline: isFocused === true && '1px solid #A5AAB4',
      '&:hover': {
        border: '1px solid #A5AAB4'
      },
      borderRadius: '12px',
    }),
    singleValue: (styles: Object) => ({
      ...styles,
      color: '#141923'
    }),
    menu: (styles: Object) => ({
      ...styles,
      backgroundColor: '#fff'
    }),
    dropdownIndicator: (styles: Object) => ({
      ...styles,
      color: '#46505A'
    }),
    indicatorSeparator: (styles: Object) => ({
      ...styles,
      display: 'none'
    }),
}