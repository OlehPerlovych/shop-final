export interface NavItem
{
    route: string
    title: string
    forAll?: boolean
    noAuthenticated?: boolean
    authenticated?: boolean
    admin?: boolean
}

export interface LoginData
{
    email: string
    password: string
}

export interface ProductType
{
    id?: string
    title: string
    category: string
    unit: string
    cost: number
    image: string
}

export interface CategoryType
{
    name:string
}