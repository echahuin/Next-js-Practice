import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { CartItemType } from 'Store/StoreCard'

type ProductListProps = {
    products: TProduct[]
}
  

const ContainerCard = (products: TProduct[]) => {

    return (
        <>
        <Card>
            <Image src={products[0].image} wrapped ui={false} />
            <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
                <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
            {products[0].name}
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <a>
                <Icon name='user' />
                {products[0].price}
            </a>
            </Card.Content>
        </Card>
        </>
    )
}

export default ContainerCard