import { DivFactory, LinkFactory, TextFactory } from './elementFactories';

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

  TextFactory({
    parent: footer,
    name: 'footerInfo',
    text: '© 2023 Weather! All rights reserved.',
    type: 'em',
    style: 'text-zinc-400',
  });

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
    style: 'text-zinc-500 hover:text-fuchsia-300 italic',
  });

  LinkFactory({
    parent: ghLink.div,
    name: 'githubProfileLink',
    text: 'Frontend Code',
    href: 'https://github.com/emeibech',
    style: 'text-zinc-500 hover:text-fuchsia-300 italic',
  });

  LinkFactory({
    parent: ghLink.div,
    name: 'githubProfileLink',
    text: 'API Proxy Server',
    href: 'https://github.com/emeibech',
    style: 'text-zinc-500 hover:text-fuchsia-300 italic',
  });
};

export default Footer;
