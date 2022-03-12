import { Aside, Profile, Card, List, Item, rootGrid, Tech, Main, Title, ProjectPost, PHeader, PBody, PFooter, Info, UseLanguage, Post, Tags, ListTags, UserImage } from "../styles/home.styles";
import { Row, Col } from "../styles/global/layout.styles";
import api from "../services/api";

import image from '../assets/images/user/vinicius.jpg';

import { techs } from "../assets/array/techs";
import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

const Portfolio = () => {

    /*

    const getStorage = useCallback(async () => {
        try {
            const storage: any = localStorage.getItem('login');
            setStorage(JSON.parse(storage));
        } catch (error) {
            console.log(error);
        }
    }, []);

    const handleUserInfo = useCallback(async (id: number) => {
        try {
            const response = api.get(`/users/${id}`);
            response.then((response) => {
                if (response.data) {
                    setUser(response.data)
                } else {
                    console.log('Erro de comunicação com a API')
                }
            });
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        getStorage();
        handleUserInfo(2);
    }, [handleUserInfo, getStorage]); */

    const [user, setUser] = useState<any>([]);

    const userID: any = localStorage.getItem('user_id');

    const handleUserInfo = useCallback(async (id: number) => {
        try {
            const response = api.get(`/users/${id}`);
            response.then((response) => {
                if (response.data) {
                    setUser(response.data);
                } else {
                    console.log('Erro de comunicação com a API');
                }
            });
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        handleUserInfo(userID);
    }, [handleUserInfo])


    const contacts = [
        {
            id: 1,
            icon: 'bi-geo-alt',
            link: '',
            socialNetwork: user.location,
        },
        {
            id: 2,
            icon: 'bi-briefcase',
            link: '',
            socialNetwork: user.companyWork,
        },
        {
            id: 3,
            icon: 'bi-github',
            link: '',
            socialNetwork: user.github,
        },
        {
            id: 4,
            icon: 'bi-linkedin',
            link: '',
            socialNetwork: user.linkedin,
        },
        {
            id: 5,
            icon: 'bi-twitter',
            link: '',
            socialNetwork: user.twitter,
        },
        {
            id: 6,
            icon: 'bi-globe',
            link: '',
            socialNetwork: `Em desenvolvimento`,
        },
        {
            id: 7,
            icon: 'bi-envelope',
            link: '',
            socialNetwork: user.professionalEmail,
        },
    ]

    rootGrid();

    return (
        <>
            <Aside>
                <Card>
                    <Profile>
                        <UserImage>
                            <img src={image} alt='Foto de perfil do usuário' />
                        </UserImage>
                        <h1>{user.fName}</h1>
                        <h2>{user.carrer}</h2>
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