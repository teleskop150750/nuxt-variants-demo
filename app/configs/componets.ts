interface IConfigComponents {
    header: string
}

export function getHeaderComponents(version: string): IConfigComponents {
    return {
        header: `~/widgets/header/ui/${version}`,
    }
}
