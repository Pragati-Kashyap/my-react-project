import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function BasicExample() {
  return (
    <div className='Container'>
    <div class="section-heading Cards text-center">
                        <h2>LATEST NEWS</h2>
                        <p>The breaking news about Gardening &amp; House plants</p>
                    </div>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://themewagon.github.io/alazea/img/bg-img/6.jpg" />
        <Card.Body>
          <Card.Title><h5>Garden designers across the country forecast ideas shaping the gardening world in 2018</h5></Card.Title>
          <Card.Text><small class="post-meta">
                                <a href="#" ><i class="fa fa-clock-o" aria-hidden="true"></i> 20 Jun 2018</a>
                                <a href="#"><i class="fa fa-user" aria-hidden="true"></i> Alan Jackson</a>
                            </small>
          <p>Integer luctus diam ac scerisque consectetur. Vimus ottawas nec lacus sit amet. Aenean interdus mid vitae.</p>
          </Card.Text>
        </Card.Body>

      </Card>
      <Card>
        <Card.Img variant="top" src="https://themewagon.github.io/alazea/img/bg-img/7.jpg" />
        <Card.Body>
          <Card.Title><h5>2018 Midwest Tree and Shrub Conference: Resilient Plants for a Lasting Landscape</h5></Card.Title>
          <Card.Text><small class="post-meta">
                                <a href="#" ><i class="fa fa-clock-o" aria-hidden="true"></i> 20 Jun 2018</a>
                                <a href="#"><i class="fa fa-user" aria-hidden="true"></i> Alan Jackson</a>
                            </small>
          
          <p>Integer luctus diam ac scerisque consectetur. Vimus ottawas nec lacus sit amet. Aenean interdus mid vitae.</p>
           
          </Card.Text>
        </Card.Body>
      
      </Card>
      <Card>
        <Card.Img variant="top" src="https://themewagon.github.io/alazea/img/bg-img/8.jpg" />
        <Card.Body>
          <Card.Title><h5>The summer coming up, it’s time for both us and the flowers to soak up the sunshine</h5></Card.Title>
          <Card.Text><small class="post-meta">
                                <a href="#" ><i class="fa fa-clock-o" aria-hidden="true"></i> 20 Jun 2018</a>
                                <a href="#"><i class="fa fa-user" aria-hidden="true"></i> Alan Jackson</a>
                            </small>
          <p>Integer luctus diam ac scerisque consectetur. Vimus ottawas nec lacus sit amet. Aenean interdus mid vitae.</p>
          </Card.Text>
        </Card.Body>
     
      </Card>
    </CardGroup>
    </div>
  );
}

export default BasicExample;