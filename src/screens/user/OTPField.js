import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const styles = StyleSheet.create({
    fieldRow: {
      marginTop: 20,
      flexDirection: 'row',
    },
    cell: {
      width: 50,
      height: 50,
      lineHeight: 55,
      fontSize: 30,
      fontWeight: '700',
      textAlign: 'center',
      marginLeft: 10,
      borderRadius: 6,
      backgroundColor: '#eee',
    },
    toggle: {
      width: 55,
      height: 55,
      lineHeight: 55,
      fontSize: 24,
      textAlign: 'center',
    },
    focusCell: {
      borderColor: '#000',
    },
});


const OTPField = ({ count, onComplete }) => {
    const [enableMask, setEnableMask] = useState(true);
    const [value, setValue] = useState('');

    const ref = useBlurOnFulfill({ value, cellCount: count });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const toggleMask = () => setEnableMask(f => !f);

    const onChange = (e) => {
        setValue(e)  
       if(value.length + 1 == count){
        onComplete(e);
       }
    };

    const renderCell = ({ index, symbol, isFocused }) => {
        let textChild = null;

        if (symbol) {
            textChild = enableMask ? '•' : symbol;
        } else if (isFocused) {
            textChild = <Cursor />;
        }

        return (
            <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {textChild}
            </Text>
        );
    };

    return (

        <View style={styles.fieldRow}>
            <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={onChange}
                cellCount={count}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={renderCell}
            />

        </View>
    );
};

export default OTPField
