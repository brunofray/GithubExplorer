import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

// https://api.github.com/orgs/rocketseat/repos

const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github.com/brunofray/GithubExplorer' 
}

export function RepositoryList() {

  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/brunofray/repos')
      .then(response => response.json())
      .then(date => setRepositories(data))
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}