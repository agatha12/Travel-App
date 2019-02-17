import * as actions from './index'

describe('addItem', () => {
    it('addItem should create ADD_ITEM action', () => {
        expect(actions.addItem('Use Redux')).toEqual({
            type: 'ADD_ITEM',
            text: 'Use Redux'
        })
    })
})

describe('UPDATE_USER', () => {
    it('UPDATE_USER should create UPDATE_USER action', () => {
        expect(actions.UPDATE_USER('Use Redux')).toEqual({
            type: 'UPDATE_USER',
            text: 'Use Redux'
        })
    })
})

describe('GET_USER', () => {
    it('GET_USER should create GET_USER action',() => {
        expect(actions.GET_USER('Use Redux')).toEqual({
            type: 'GET_USER',
            text: 'Use Redux'
        })
    })
})