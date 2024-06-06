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
            style={{ position:'relative', width:'85%', marginTop:'30px'}}
          >
            &nbsp;Follow me on twitter
          </Button>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" , position:'relative'}}>
    <Col md={4} className="project-card">
    <Stack>
            <TwitterTweetEmbed
              tweetId={'1793868904508399915'}
              options={{theme: 'dark'}}
            />
            <TwitterTweetEmbed
              tweetId={'1760923516759880034'}
              options={{theme: 'dark'}}
            />
            <TwitterTweetEmbed
      tweetId={'1685934199767965696'}
      options={{theme: 'dark'}}
    />
    
    <TwitterTweetEmbed
              tweetId={'1767872872905613549'}
              options={{theme: 'dark'}}
            />
  </Stack>
    </Col>
    <Col md={4} className="project-card">
    <Stack>
    <TwitterTweetEmbed
              tweetId={'1577031495541104640'}
              options={{theme: 'dark'}}
            />
    <TwitterTweetEmbed
      tweetId={'1691447528825507841'}
      options={{theme: 'dark'}}
    />
    <TwitterTweetEmbed
      tweetId={'1764903689020432828'}
      options={{theme: 'dark'}}
    />
    <TwitterTweetEmbed
      tweetId={'1644965653466726401'}
      options={{theme: 'dark'}}
    />
    
  </Stack>
    </Col>
    <Col md={4} className="project-card">
    <Stack>
    <TwitterTweetEmbed
      tweetId={'1777235134623682683'}
      options={{theme: 'dark'}}
    />
    <TwitterTweetEmbed
    tweetId={'1680128433781723138'}
    options={{theme: 'dark'}}
    />
    <TwitterTweetEmbed
    tweetId={'1650400157274370050'}
    options={{theme: 'dark'}}
    />
    <TwitterTweetEmbed
    tweetId={'1628721824820510720'}
    options={{theme: 'dark'}}
    />
    <TwitterTweetEmbed
    tweetId={'1609270364391063553'}
    options={{theme: 'dark'}}
    />
  </Stack>
    </Col>
    </Row>
    <Button
            variant="primary"
            href="https://x.com/IMDB___"
            target="_blank"
            style={{ position:'relative', width:'85%'}}
          >
            &nbsp;Follow me on twitter
          </Button>
    </>
  );
}
export default Tweets;


