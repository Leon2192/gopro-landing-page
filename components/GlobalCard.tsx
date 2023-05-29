import { Button, Card, Col, Row, Text } from '@nextui-org/react'

import type { NextPage } from "next";

interface Props {
    title: string;
    label: string
    imageURL: string
}


const GlobalCard: NextPage<Props> = (props) => {

    const { title, label, imageURL } = props;

    return (
        <Card>
            <Card.Header css={{ position: 'absolute', top: 5 }}>
                <Col>
                    <Text size={12} weight='bold' transform='uppercase' color='#ffffffAA'>
                        {label}
                    </Text>
                    <Text h4 color='white'>
                        {title}
                    </Text>
                </Col>
            </Card.Header>
            <Card.Image src={imageURL} />
            <Card.Footer isBlurred css={{
                position: 'absolute',
                bgBlur: '#f111466',
                bottom: 0
            }}>

            </Card.Footer>
        </Card>
    )

}

export default GlobalCard;