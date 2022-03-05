import { Aside, Profile, Card, List, Item, rootGrid, Tech, Main, Title, ProjectPost, PHeader, PBody, PFooter, Info, UseLanguage, Post, Tags, ListTags, UserImage } from "../styles/home.styles";
import { Row, Col } from "../styles/global/layout.styles";
import api from "../services/api";

import image from '../assets/images/user/vinicius.jpg';

import { contacts } from "../assets/array/contacts";
import { techs } from "../assets/array/techs";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Portfolio = () => {

    const [user, setUser] = useState<any>([]);

    useEffect(() => {
        api
            .get('/users/v1nni7')
            .then((response) => setUser(response.data))
            .catch((err) => {
                console.log('Erro com a API:' + err)
            });
    }, [])

    rootGrid();

    return (
        <>
            <Aside>
                <Card>
                    <Profile>
                        <UserImage>
                            <img src={user.avatar_url} alt='Foto de perfil do usuário' />
                        </UserImage>
                        <h1>{user.name}</h1>
                        <h2>Programador FullStack</h2>
                    </Profile>
                </Card>

                <Card>
                    <List>
                        {contacts.map(c => {
                            return (
                                <Item key={c.id}>
                                    <i className={`bi ${c.icon}`}></i> <h3>{c.socialNetwork}</h3>
                                </Item>
                            )
                        })}
                    </List>
                </Card>

                <Card>
                    <h2>Tecnologias</h2>
                    <Row>
                        {techs.map(t => {
                            return (
                                <Col columnsOccupation={4} key={t.id}>
                                    <Tech>{t.tech}</Tech>
                                </Col>
                            )
                        })}
                    </Row>
                </Card>
            </Aside>

            <Main>
                <section id="projects">
                    <Card>
                        <Title>
                            <h1>Meus Projetos</h1>

                            <Link to="/">Veja Todos</Link>
                        </Title>
                    </Card>


                    <Row>
                        <Col columnsOccupation={4}>
                            <Card>
                                <ProjectPost>
                                    <PHeader>
                                        <i className="bi bi-folder"></i> <h2>Portfolio</h2>
                                    </PHeader>
                                    <PBody>
                                        <p>
                                            Portfólio criado com intuito de postar todos os projetos feitos por mim.
                                        </p>
                                    </PBody>
                                    <PFooter>
                                        <Info>
                                            <span><i className="bi bi-star"></i> <h6>100</h6></span>
                                            <span><i className="bi bi-git"></i> <h6>100</h6></span>
                                        </Info>

                                        <span>
                                            <UseLanguage language={'javascript'}> </UseLanguage>
                                            <h5>JavaScript</h5>
                                        </span>
                                    </PFooter>
                                </ProjectPost>
                            </Card>
                        </Col>
                        <Col columnsOccupation={4}>
                            <Card>
                                <ProjectPost>
                                    <PHeader>
                                        <i className="bi bi-folder"></i> <h2>Portfolio</h2>
                                    </PHeader>
                                    <PBody>
                                        <p>
                                            Portfólio criado com intuito de postar todos os projetos feitos por mim.
                                        </p>
                                    </PBody>
                                    <PFooter>
                                        <Info>
                                            <span><i className="bi bi-star"></i> <h6>100</h6></span>
                                            <span><i className="bi bi-git"></i> <h6>100</h6></span>
                                        </Info>

                                        <span>
                                            <UseLanguage language={'javascript'}> </UseLanguage>
                                            <h5>JavaScript</h5>
                                        </span>
                                    </PFooter>
                                </ProjectPost>
                            </Card>
                        </Col>
                        <Col columnsOccupation={4}>
                            <Card>
                                <ProjectPost>
                                    <PHeader>
                                        <i className="bi bi-folder"></i> <h2>Portfolio</h2>
                                    </PHeader>
                                    <PBody>
                                        <p>
                                            Portfólio criado com intuito de postar todos os projetos feitos por mim.
                                        </p>
                                    </PBody>
                                    <PFooter>
                                        <Info>
                                            <span><i className="bi bi-star"></i> <h6>100</h6></span>
                                            <span><i className="bi bi-git"></i> <h6>100</h6></span>
                                        </Info>

                                        <span>
                                            <UseLanguage language={'javascript'}> </UseLanguage>
                                            <h5>JavaScript</h5>
                                        </span>
                                    </PFooter>
                                </ProjectPost>
                            </Card>
                        </Col>
                    </Row>
                </section>

                <section id="posts">
                    <Card>
                        <Title>
                            <h1>Postagens Recentes</h1>
                        </Title>
                    </Card>

                    <Card>
                        <Post>
                            <Row>
                                <Col columnsOccupation={2}>
                                    <UserImage>
                                        <img src={image} alt="" />
                                    </UserImage>
                                </Col>
                                <Col columnsOccupation={8}>
                                    <h2>Titulo Postagens</h2>
                                    <h3>1 Mês atrás</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus tempora modi numquam sunt quisquam necessitatibus voluptas tenetur distinctio. Laborum neque expedita cumque tenetur, officia blanditiis reprehenderit est maxime magnam culpa!</p>

                                    <ListTags>
                                        <Tags>
                                            <h4>#dev</h4>
                                        </Tags>
                                        <Tags>
                                            <h4>#reactjs</h4>
                                        </Tags>
                                        <Tags>
                                            <h4>#typescript</h4>
                                        </Tags>
                                    </ListTags>
                                </Col>
                            </Row>
                        </Post>
                    </Card>
                </section>


            </Main>
        </>
    )
}

export default Portfolio;