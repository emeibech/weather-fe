import { DivFactory, LinkFactory } from './elementFactories';

const Footer = (parent) => {
  const footer = (() => {
    const footerElement = document.createElement('footer');
    footerElement.setAttribute('data-name', 'footer');
    footerElement.classList.add(
      'mt-4',
      'mx-4',
      'py-4',
      'flex',
      'flex-col',
      'text-sm',
      'gap-y-2',
      'items-center',
      'border-t-2',
      'border-zinc-800',
    );

    parent.appendChild(footerElement);

    return footerElement;
  })();

  const ghLink = DivFactory({
    parent: footer,
    name: 'githubLinksDiv',
    style: 'grid place-items-center',
  });

  LinkFactory({
    parent: ghLink.div,
    name: 'githubProfileLink',
    text: 'Author Profile',
    href: 'https://github.com/emeibech',
    style: 'hover:text-slate-50 italic text-cyan-400 visited:text-fuchsia-400',
  });

  LinkFactory({
    parent: ghLink.div,
    name: 'githubProfileLink',
    text: 'Frontend Code',
    href: 'https://github.com/emeibech/weather-fe',
    style: 'hover:text-slate-50 italic text-cyan-400 visited:text-fuchsia-400',
  });

  LinkFactory({
    parent: ghLink.div,
    name: 'githubProfileLink',
    text: 'Server Code',
    href: 'https://github.com/emeibech/express-server',
    style: 'hover:text-slate-50 italic text-cyan-400 visited:text-fuchsia-400',
  });
};

export default Footer;
