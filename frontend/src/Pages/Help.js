import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import "./../Style/base.css";

const Help = () => {
  const [helpData, setHelpData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHelpData = async () => {
      try {
        const response = await fetch("http://localhost:5000/help");
        const data = await response.json();
        setHelpData(data);
      } catch (error) {
        console.error("Error fetching help data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHelpData();
  }, []);

  return (
    <div className="container1">
      <div className="header-section">
        <h2>Help & Support</h2>
        <p>We are here to assist you with all your queries.</p>
      </div>

      <div className="container">
        <h3>Partner Onboarding</h3>

        {loading ? (
          <p>Loading help topics...</p>
        ) : (
          <Accordion defaultActiveKey="0">
            {helpData.map((item, index) => (
              <Accordion.Item eventKey={index.toString()} key={item.id}>
                <Accordion.Header>{item.title}</Accordion.Header>
                <Accordion.Body>{item.data}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        )}
      </div>
    </div>
  );
};

export default Help;
