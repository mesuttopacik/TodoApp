import React from "react";
import { render } from "@testing-library/react-native";
import IconCard from "./IconCard";


test('should mach with snapshot', () => { 
    const comp = render(<IconCard/>)
    expect(comp).toMatchSnapshot()
 })

test('should icon title match sended title', () => { 
    const testName = 'times-circle-o'
    const comp = render(<IconCard name={testName}/>)
    const icon = comp.getByTestId('list-icon-name').props.style[0]

    expect(icon.fontSize).toBe(25)
    expect(icon.color).toBe('#eeee')
})