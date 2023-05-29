import { Button, Card, Col, Row, Text } from '@nextui-org/react'

import type { NextPage } from "next";

interface Props {
    title: string;
    label: string
    imageURL: string
}


const CardsBanner: NextPage<Props> = (props) => {

    const { title, label, imageURL } = props;

    return (
        <Card>
            <Card.Header css={{ position: 'absolute', top: 5 }}>
                <Col>

                </Col>
            </Card.Header>
            <Card.Image src={imageURL} />
            <Col css={{ width: "100%", marginLeft: '33px' }}>
                <Text weight={"bold"} size={20} css={{ textAlign: "center", }}>
                    {label}
                </Text>

                <Col css={{ display: "flex", justifyContent: "center", marginBottom: '22px', marginTop: '22px' }}>
                    <Button
                        style={{
                            background: 'black'
                        }}
                        shadow
                        size="md"
                        css={{ width: "25%", marginTop: "10px" }}
                    >
                        Comprar ahora
                    </Button>
                </Col>
            </Col>
        </Card>
    )

}

export default CardsBanner;