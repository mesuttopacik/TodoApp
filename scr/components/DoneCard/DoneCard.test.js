import React from 'react'
import {render} from '@testing-library/react-native'
import DoneCard from './DoneCard'

test('should match with snapshot', () => {
    const comp = render(<DoneCard />)
    expect(comp).toMatchSnapshot();
})