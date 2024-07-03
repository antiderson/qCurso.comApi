import { config } from '@tamagui/config/v3'
import { createTamagui, GenericFont } from 'tamagui'

// Defina a configuração da fonte Poppins
const poppinsFont: GenericFont = {
    family: 'Poppins, sans-serif',
    size: {
        1: 12,
        2: 14,
        3: 16,
        4: 18,
        5: 20,
        6: 24,
        7: 30,
        8: 36,
        9: 48,
        10: 64,
    },
    lineHeight: {
        1: 1.5,
        2: 1.5,
        3: 1.5,
        4: 1.5,
        5: 1.5,
        6: 1.5,
        7: 1.5,
        8: 1.5,
        9: 1.5,
        10: 1.5,
    },
    weight: {
        1: '400',
        2: '700',
    },
    letterSpacing: {
        1: 0,
        2: 0.5,
    },
    style: {
        normal: 'normal',
        italic: 'italic'
    },
}

const customConfig = {
    ...config,
    fonts: {
        ...config.fonts,
        body: poppinsFont,
    },
}

const tamaguiConfig = createTamagui(customConfig)

// this makes typescript properly type everything based on the config
type Conf = typeof tamaguiConfig

declare module 'tamagui' {
    interface TamaguiCustomConfig extends Conf { }
}

export default tamaguiConfig
