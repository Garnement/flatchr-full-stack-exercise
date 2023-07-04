import React from "react";
import Card from "react-bootstrap/Card";
import { data } from "../data/kanban";

export default function Kanban() {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Body>
                {data.map((item, index) => (
                    <Card key={index}>
                        <Card.Body
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: "10px",
                                textAlign: "center",
                                fontWeight: "bold",
                                fontSize: "14px",
                            }}
                        >
                            <div className="d-flex gap-2">
                                <p>{item.lastName}</p>
                                <p>{item.firstName}</p>
                            </div>

                            <p>{item.email}</p>
                            <p>{item.date}</p>
                        </Card.Body>
                    </Card>
                ))}
            </Card.Body>
        </Card>
    );
}
