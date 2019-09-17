export default {
    state: {
        actualColorSet: 'default',
        colorSets: {
            'default': {
                primary: 'var(--dark-purple)',
                constrast: 'var(--red)',
                logo: 'copi-logo-1.svg'
            },
            'guias': {
                primary: 'var(--red)',
                contrast: 'var(--green)',
                logo: 'copi-logo-2.svg'    
            },
            'novidades': {
                primary: 'var(--yellow)',
                contrast: 'var(--dark-purple)',
                logo: 'copi-logo-4.svg'    
            }
        } 
    },
    mutations: {
        defineColorSet (state, colorSet) {
            state.actualColorSet = colorSet
        }
    }
}