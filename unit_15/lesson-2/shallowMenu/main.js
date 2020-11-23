const shallowMenu = [
  {
    title: 'Dashboard',
    link: '/dashboard',
    children: [
      {
        title: 'Tool',
        link: '/dashboard/tool'
      },
      {
        title: 'Reports',
        link: '/dashboard/reports'
      },
      {
        title: 'Analytics',
        link: '/dashboard/analytics'
      },
      {
        title: 'Code Blocks',
        link: '/dashboard/code-blocks'
      },
    ]
  },
  {
    title: 'Sales',
    link: '/sales',
    children: [
      {
        title: 'New Sales',
        link: '/sales/new-sales'
      },
      {
        title: 'Expired Sales',
        link: '/sales/expired-sales'
      },
      {
        title: 'Sales Reports',
        link: '/sales/sales-reports'
      },
      {
        title: 'Deliveries',
        link: '/sales/deliveries'
      },
    ]
  },
  {
    title: 'Messages',
    link: '/messages',
    children: [
      {
        title: 'Inbox',
        link: '/messages/inbox'
      },
      {
        title: 'Outbox',
        link: '/messages/outbox'
      },
      {
        title: 'Sent',
        link: '/messages/sent'
      },
      {
        title: 'Archived',
        link: '/messages/archived'
      },
    ]
  },
  {
    title: 'Users',
    link: '/users',
    children: [
      {
        title: 'New User',
        link: '/users/new-user'
      },
      {
        title: 'User Groups',
        link: '/users/user-groups'
      },
      {
        title: 'Permissions',
        link: '/users/permissions'
      },
      {
        title: 'passwords',
        link: '/users/passwords'
      },
    ]
  },
  {
    title: 'Settings',
    link: '/settings',
    children: [
      {
        title: 'Databases',
        link: '/settings/databases'
      },
      {
        title: 'Design',
        link: '/settings/design'
      },
      {
        title: 'Change User',
        link: '/settings/change-user'
      },
      {
        title: 'Log Out',
        link: '/settings/log-out'
      },
    ]
  },
]

const listIconShallow = {
  Dashboard: '<i class="fal fa-tachometer-alt"></i>',
  Sales: '<i class="fas fa-truck-moving"></i>',
  Messages: '<i class="fas fa-envelope"></i>',
  Users: '<i class="fas fa-user-friends"></i>',
  Settings: '<i class="fas fa-cog"></i>'
}


const createShallowMenu = (ul, shallowMenu, listIconShallow = {}) => {
  for (let i = 0; i < shallowMenu.length; i++) {
    const li = document.createElement('li')
    li.appendChild(
      createTagAMenuShallow(listIconShallow, shallowMenu[i])
    )
    li.classList.add('item')
    if (shallowMenu[i].children) {
      const ul = document.createElement('ul')
      createShallowMenu(ul, shallowMenu[i].children)
      li.appendChild(ul)
      ul.classList.add('list-menu-dropdown')
    }
    ul.appendChild(li)
    ul.classList.add('list-menu')
  }
}

const renderShallowMenu = () => {
  const ul = document.createElement('ul')
  createShallowMenu(ul, shallowMenu, listIconShallow)
  const container = document.querySelector('.container')
  container.appendChild(ul)
}

const createTagAMenuShallow = (listIconShallow = {}, shallowMenu) => {
  const iconArrow = '<i class="fas fa-angle-right"></i>'
  const tagA = document.createElement('a')
  const spanText = document.createElement('span')
  const spanIcon = document.createElement('span')
  const spanIconArrow = document.createElement('span')

  tagA.setAttribute('href', shallowMenu.link)
  tagA.classList.add('link-item')
  spanText.innerText = shallowMenu.title
  spanText.classList.add('text-title')

  for (let key in listIconShallow) {
    if (key === shallowMenu.title) {
      spanIcon.insertAdjacentHTML('afterbegin', listIconShallow[key])
      tagA.appendChild(spanIcon)
      spanIcon.classList.add('icon')

      tagA.appendChild(spanText)

      spanIconArrow.insertAdjacentHTML('afterbegin', iconArrow)
      tagA.appendChild(spanIconArrow)
      spanIconArrow.classList.add('icon-arrow')
    }
  }
  if (Object.keys(listIconShallow).length === 0) {
    tagA.appendChild(spanText)
  }
  return tagA
}

renderShallowMenu()


const clickMenuItem = event => {
  const borderItem = event.currentTarget
  const listItemDropdown = borderItem.querySelectorAll('.list-menu-dropdown')
  event.preventDefault()
  borderItem.style.border = 'none'
  const iconArrow = borderItem.querySelector('.icon-arrow')
  iconArrow.classList.toggle('icon-dropdown')
  listItemDropdown.forEach(item => {
    item.classList.toggle('display-block')
  })
}

const listLi = document.querySelectorAll('.list-menu .item')
listLi.forEach(li => {
  li.addEventListener('click', clickMenuItem)
})
