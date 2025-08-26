import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import {Button, Row, Stack, Col } from "react-bootstrap";

function Tweets() {
  return (
    <>
    <Button
            variant="primary"
            href="https://x.com/IMDB___"
            target="_blank"
            style={{ position:'relative', width:'90%', marginTop:'4%'}}
          >
            &nbsp;Follow me on twitter
          </Button>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" , position:'relative'}}>
    <Col md={4} className="project-card">
    <Stack>
            <TwitterTweetEmbed
              tweetId={'1959142647161102414'}
              options={{theme: 'dark'}}
            />
            <TwitterTweetEmbed
    tweetId={'1884305029714305350'}
    options={{theme: 'dark'}}
    />
            <TwitterTweetEmbed
      tweetId={'1955862741798801707'}
      options={{theme: 'dark'}}
    />
    
    <TwitterTweetEmbed
              tweetId={'1952622776172544488'}
              options={{theme: 'dark'}}
            />
  </Stack>
    </Col>
    <Col md={4} className="project-card">
    <Stack>
    <TwitterTweetEmbed
              tweetId={'1904245401387208978'}
              options={{theme: 'dark'}}
            />
    <TwitterTweetEmbed
      tweetId={'1909160215619993818'}
      options={{theme: 'dark'}}
    />
    <TwitterTweetEmbed
      tweetId={'1917239185351860498'}
      options={{theme: 'dark'}}
    />
    <TwitterTweetEmbed
      tweetId={'1919783990401335705'}
      options={{theme: 'dark'}}
    />
    
  </Stack>
    </Col>
    <Col md={4} className="project-card">
    <Stack>
    <TwitterTweetEmbed
      tweetId={'1933460836422726095'}
      options={{theme: 'dark'}}
    />
    <TwitterTweetEmbed
    tweetId={'1945443179781636499'}
    options={{theme: 'dark'}}
    />
    <TwitterTweetEmbed
    tweetId={'1886161044436918786'}
    options={{theme: 'dark'}}
    />
    <TwitterTweetEmbed
    tweetId={'1885398845703807326'}
    options={{theme: 'dark'}}
    />
    <TwitterTweetEmbed
              tweetId={'1956268906844447101'}
              options={{theme: 'dark'}}
            />
  </Stack>
    </Col>
    </Row>
    <Button
            variant="primary"
            href="https://x.com/IMDB___"
            target="_blank"
            style={{ position:'relative', width:'90%', marginTop:'4%'}}
          >
            &nbsp;Follow me on twitter
          </Button>
    </>
  );
}
export default Tweets;


