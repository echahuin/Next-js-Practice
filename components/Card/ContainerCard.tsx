import React, { FC } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import Link from 'next/link'

export interface TProduct {
    attributes: any
    id: string
    image: string
    name: string
    price: number
    sku: string
}


interface ContainerCardProps {
    products: TProduct[]
}


const ContainerCard: FC<ContainerCardProps> = ({ products }) => {

    return (
        <>
            {products.map(product => {
                return (
                    <Link href={`/product/${product.id}`}>
                        <Card>
                            <Image src={product?.image} wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>Matthew</Card.Header>
                                <Card.Meta>
                                    <span className='date'>Joined in 2015</span>
                                </Card.Meta>
                                <Card.Description>
                                    {product?.name}
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a>
                                    <Icon name='user' />
                                    {product?.price}
                                </a>
                            </Card.Content>
                        </Card>
                    </Link>
                )
            })}
        </>
    )
}

export default ContainerCard