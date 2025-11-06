// Multilingual Configuration File
export type Language = 'en' | 'zh';

export interface Translation {
  common: {
    save: string;
    cancel: string;
    delete: string;
    edit: string;
    create: string;
    search: string;
    loading: string;
    error: string;
    success: string;
    warning: string;
    info: string;
    confirm: string;
    yes: string;
    no: string;
    online: string;
    offline: string;
    all: string;
    newItemName: string;
    itemValue: string;
    languageEnglish: string;
    languageChinese: string;
    navigation: string;
    created: string;
    id: string;
    name: string;
    ipAddresses: string;
    ipv4Address: string;
    tags: string;
    owner: string;
    newOwner: string;
    lastSeen: string;
    expires: string;
    hostname: string;
    registerMethod: string;
    routes: string;
    email: string;
    displayName: string;
    provider: string;
    hideInvalid: string;
    any: string;
    tcp: string;
    udp: string;
    icmp: string;
    add: string;
    deleteUser: string;
    deleteNode: string;
    noResultsFound: string;
    membersOf: string;
    selectMembersOf: string;
    selectOwnersOf: string;
    selectPlaceholder: string;
    ownersOf: string;
    advertisedTags: string;
    userDeleted: string;
    userCreateSuccess: string;
    userCreateFailed: string;
    userDeleteFailed: string;
    userDeleteFailedWithNodes: string;
    nodeDeleted: string;
    nodeCreateSuccess: string;
    nodeCreateFailed: string;
    nodeDeleteFailed: string;
    userNameNotEmpty: string;
    nodeNameNotEmpty: string;
    usernameAndDeviceKeyRequired: string;
    tagShouldBeLowercaseAlphanumeric: string;
    invalidCIDRFormat: string;
    invalidTags: string;
    copiedToClipboard: string;
    failedToCopyToClipboard: string;
    doesNotExpire: string;
    validKeys: string;
    nodeOwnerChanged: string;
    user: string;
    timeFromNow: string;
    timeAgo: string;
    timeMonth: string;
    timeMonths: string;
    timeWeek: string;
    timeWeeks: string;
    timeDay: string;
    timeDays: string;
    timeHour: string;
    timeHours: string;
    timeMinute: string;
    timeMinutes: string;
    timeSecond: string;
    timeSeconds: string;
    onlineNow: string;
  };
  navigation: {
    home: string;
    users: string;
    nodes: string;
    deploy: string;
    routes: string;
    acls: string;
    aclBuilder: string;
    settings: string;
  };
  home: {
    title: string;
    totalUsers: string;
    onlineUsers: string;
    validPreAuthKeys: string;
    totalNodes: string;
    onlineNodes: string;
    totalRoutes: string;
  };
  settings: {
    title: string;
    apiUrl: string;
    apiKey: string;
    apiRefreshInterval: string;
    consoleDebugging: string;
    theme: string;
    language: string;
    saveSettings: string;
    enterApiKey: string;
    showApiKey: string;
    hideApiKey: string;
    refreshApiKey: string;
    authorized: string;
    notAuthorized: string;
    checkingAuthorization: string;
    expiresIn: string;
    logUsers: string;
    logNodes: string;
    logPreAuthKeys: string;
    logApiKeyInfo: string;
    apiKeyUnauthorized: string;
    apiKeyExpiresSoon: string;
    savedSettings: string;
  };
  users: {
    title: string;
    createUser: string;
    id: string;
    name: string;
    newUsername: string;
    sortId: string;
    sortName: string;
    filterAll: string;
    filterOnline: string;
    filterOffline: string;
    preAuthKeys: string;
    nodes: string;
    ephemeral: string;
    reusable: string;
  };
  nodes: {
    title: string;
    createNode: string;
    id: string;
    name: string;
    lastSeen: string;
    preAuthKey: string;
    cli: string;
    oidc: string;
    unspecified: string;
    deviceKey: string;
    sortId: string;
    sortName: string;
    sortLastSeen: string;
    filterAll: string;
    filterOnline: string;
    filterOffline: string;
  };
  routes: {
    title: string;
    id: string;
    name: string;
    sortId: string;
    sortName: string;
    filterAll: string;
    filterOnline: string;
    filterOffline: string;
  };
  acls: {
    title: string;
    groups: string;
    tagOwners: string;
    hosts: string;
    policies: string;
    ssh: string;
    config: string;
    srcObject: string;
    dstObject: string;
    dstPorts: string;
    createGroup: string;
    createTag: string;
    createHost: string;
    createPolicy: string;
    createSshRule: string;
    filterGroups: string;
    filterTags: string;
    filterHosts: string;
    filterPolicies: string;
    filterSshRules: string;
    saveConfig: string;
    loadConfig: string;
    editConfig: string;
    applyConfig: string;
    cancelEditing: string;
    resetConfig: string;
    protocol: string;
    sources: string;
    destinations: string;
    groupRenamed: string;
    groupDeleted: string;
    hostRenamed: string;
    hostDeleted: string;
    hostNameConflict: string;
    policyDeleted: string;
    sshRuleDeleted: string;
    tagRenamed: string;
    tagDeleted: string;
    unableToGetPolicy: string;
    groupNameMustBeLowercase: string;
    groupNameLimited: string;
    tagNameNoSpaces: string;
    hostNameLimited: string;
    invalidHostIpOrCidr: string;
    hostAlreadyExists: string;
    hostDoesNotExist: string;
    hostNewAlreadyExists: string;
    tagOldDoesNotExist: string;
    tagDoesNotExist: string;
    groupAlreadyExists: string;
    groupOldDoesNotExist: string;
    groupDoesNotExist: string;
    policyDoesNotExist: string;
    noSshRulesDefined: string;
    policyCreated: string;
    sshRuleDoesNotExist: string;
    savedAclConfiguration: string;
    tabCustom: string;
    tabUser: string;
    tabHost: string;
    tabGroup: string;
    tabTag: string;
    usernames: string;
    policyNumber: string;
    sshRuleNumber: string;
    policyLoaded: string;
    hostCreated: string;
    host: string;
    tagCreated: string;
    groupCreated: string;
    sshRuleCreated: string;
    tag: string;
    group: string;
  };
  deploy: {
    title: string;
    general: string;
    shieldsUp: string;
    shieldsUpHelp: string;
    advertiseExitNode: string;
    advertiseExitNodeLocalAccess: string;
    advertiseRoutes: string;
    advertiseRoutesHelp: string;
    advertiseTags: string;
    advertiseTagsHelp: string;
    acceptDns: string;
    acceptDnsHelp: string;
    acceptRoutes: string;
    acceptRoutesHelp: string;
    acceptExitNode: string;
    acceptExitNodeHelp: string;
    copyCommand: string;
    copiedToClipboard: string;
    advertise: string;
    accept: string;
    saveDefaults: string;
    generateQR: string;
    generateQRHelp: string;
    reset: string;
    resetHelp: string;
    operator: string;
    operatorHelp: string;
    forceReauth: string;
    forceReauthHelp: string;
    sshServer: string;
    sshServerHelp: string;
    preAuthKey: string;
    preAuthKeyHelp: string;
    unattended: string;
    unattendedHelp: string;
    allowLanAccess: string;
    allowLanAccessHelp: string;
    advertiseExitNodeHelp: string;
    savedDeploymentDefaults: string;
  };
}

export const translations: Record<Language, Translation> = {
  en: {
    common: {
      save: 'Save',
      cancel: 'Cancel',
      delete: 'Delete',
      edit: 'Edit',
      create: 'Create',
      search: 'Search',
      loading: 'Loading',
      error: 'Error',
      success: 'Success',
      warning: 'Warning',
      info: 'Info',
      confirm: 'Confirm',
      yes: 'Yes',
      no: 'No',
      online: 'Online',
      offline: 'Offline',
      all: 'All',
      newItemName: 'New {title} Name...',
      itemValue: '{title} Value...',
      languageEnglish: 'English',
      languageChinese: '中文 (Chinese)',
      navigation: 'Navigation',
      created: 'Created',
      id: 'ID',
      name: 'Name',
      ipAddresses: 'IP Addresses',
      ipv4Address: 'IPv4 Address',
      tags: 'Tags',
      owner: 'Owner',
      newOwner: 'New Owner',
      lastSeen: 'Last Seen',
      expires: 'Expires',
      hostname: 'Hostname',
      registerMethod: 'Register Method',
      routes: 'Routes',
      email: 'Email',
      displayName: 'Display Name',
      provider: 'Provider',
      hideInvalid: 'Hide invalid',
      any: 'Any',
      tcp: 'TCP',
      udp: 'UDP',
      icmp: 'ICMP',
      add: 'Add',
      deleteUser: 'Delete User',
      deleteNode: 'Delete Node',
      noResultsFound: 'No Results Found',
      membersOf: 'Members of',
      selectMembersOf: 'Select members of',
      selectOwnersOf: 'Select owners of',
      selectPlaceholder: 'Select...',
      ownersOf: 'Owners of',
      advertisedTags: 'Advertised Tags',
      userDeleted: 'Deleted User "{name}" (ID: {id})',
      userCreateSuccess: 'Created user "{name}"',
      userCreateFailed: 'Failed to create user "{name}"',
      userDeleteFailed: 'Failed to Delete User "{name}" ({id})',
      userDeleteFailedWithNodes: 'Failed to Delete User "{name}" ({id}). Still has nodes.',
      nodeDeleted: 'Deleted machine "{name}" ({id})',
      nodeCreateSuccess: 'Created node "{name}"',
      nodeCreateFailed: 'Failed to create node',
      nodeDeleteFailed: 'Failed to Delete machine "{name}" ({id})',
      userNameNotEmpty: 'User name must not be empty',
      nodeNameNotEmpty: 'Node name must not be empty',
      usernameAndDeviceKeyRequired: 'Username and Device Key are Required',
      tagShouldBeLowercaseAlphanumeric: 'Tag should be a lowercase alphanumeric word',
      invalidCIDRFormat: 'Invalid CIDR Format',
      invalidTags: 'Invalid Tags: {error}',
      copiedToClipboard: 'Copied to Clipboard!',
      failedToCopyToClipboard: 'Failed to copy to clipboard!',
      doesNotExpire: 'Does Not Expire',
      validKeys: 'Valid Key(s)',
      nodeOwnerChanged: 'Changed owner of {nodeName} from "{oldOwner}" to "{newOwner}"',
      user: 'User',
      timeFromNow: 'from now',
      timeAgo: 'ago',
      timeMonth: 'month',
      timeMonths: 'months',
      timeWeek: 'week',
      timeWeeks: 'weeks',
      timeDay: 'day',
      timeDays: 'days',
      timeHour: 'hour',
      timeHours: 'hours',
      timeMinute: 'minute',
      timeMinutes: 'minutes',
      timeSecond: 'second',
      timeSeconds: 'seconds',
      onlineNow: 'Online Now',
    },
    navigation: {
      home: 'Home',
      users: 'Users',
      nodes: 'Nodes',
      deploy: 'Deploy',
      routes: 'Routes',
      acls: 'ACLs',
      aclBuilder: 'ACL Builder',
      settings: 'Settings',
    },
    home: {
      title: 'Home',
      totalUsers: 'Total Users',
      onlineUsers: 'Online Users',
      validPreAuthKeys: 'Valid PreAuth Keys',
      totalNodes: 'Total Nodes',
      onlineNodes: 'Online Nodes',
      totalRoutes: 'Total Routes',
    },
    settings: {
      title: 'Settings',
      apiUrl: 'API URL',
      apiKey: 'API Key',
      apiRefreshInterval: 'API Refresh Interval (seconds)',
      consoleDebugging: 'Console Debugging',
      theme: 'Theme',
      language: 'Language',
      saveSettings: 'Save Settings',
      enterApiKey: 'Enter your API Key',
      showApiKey: 'Show API Key',
      hideApiKey: 'Hide API Key',
      refreshApiKey: 'Refresh API Key',
      authorized: 'Authorized',
      notAuthorized: 'Not Authorized',
      checkingAuthorization: 'Checking authorization',
      expiresIn: 'Expires in',
      logUsers: 'Log Users',
      logNodes: 'Log Nodes',
      logPreAuthKeys: 'Log PreAuthKeys',
      logApiKeyInfo: 'Log ApiKey Info',
      apiKeyUnauthorized: 'API Key is Unauthorized or Invalid',
      apiKeyExpiresSoon: 'API Key Expires Soon',
      savedSettings: 'Saved Settings',
    },
    users: {
      title: 'Users',
      createUser: 'Create User',
      id: 'ID',
      name: 'Name',
      newUsername: 'New Username...',
      sortId: 'Sort by ID',
      sortName: 'Sort by Name',
      filterAll: 'All',
      filterOnline: 'Online',
      filterOffline: 'Offline',
      preAuthKeys: 'PreAuth Keys',
      nodes: 'Nodes',
      ephemeral: 'Ephemeral',
      reusable: 'Reusable',
    },
    nodes: {
      title: 'Nodes',
      createNode: 'Create Node',
      id: 'ID',
      name: 'Name',
      lastSeen: 'Last Seen',
      preAuthKey: 'PreAuthKey',
      cli: 'CLI',
      oidc: 'OIDC',
      unspecified: 'Unspecified',
      deviceKey: 'Device Key',
      sortId: 'Sort by ID',
      sortName: 'Sort by Name',
      sortLastSeen: 'Sort by Last Seen',
      filterAll: 'All',
      filterOnline: 'Online',
      filterOffline: 'Offline',
    },
    routes: {
      title: 'Routes',
      id: 'ID',
      name: 'Name',
      sortId: 'Sort by ID',
      sortName: 'Sort by Name',
      filterAll: 'All',
      filterOnline: 'Online',
      filterOffline: 'Offline',
    },
    acls: {
      title: 'ACL Builder',
      groups: 'Groups',
      tagOwners: 'Tag Owners',
      hosts: 'Hosts',
      policies: 'Policies',
      ssh: 'SSH',
      config: 'Config',
      srcObject: 'Src Object...',
      dstObject: 'Dst Object...',
      dstPorts: 'Dst Ports...',
      createGroup: 'Create Group',
      createTag: 'Create Tag',
      createHost: 'Create Host',
      createPolicy: 'Create Policy',
      createSshRule: 'Create SSH Rule',
      filterGroups: 'Filter Groups...',
      filterTags: 'Filter Tags...',
      filterHosts: 'Filter Hosts...',
      filterPolicies: 'Filter Policies...',
      filterSshRules: 'Filter SSH Rules...',
      saveConfig: 'Save Config',
      loadConfig: 'Load Config',
      editConfig: 'Edit Config',
      applyConfig: 'Apply Config',
      cancelEditing: 'Cancel Editing',
      resetConfig: 'Reset Config',
      protocol: 'Protocol',
      sources: 'Sources',
      destinations: 'Destinations',
      groupRenamed: 'Group renamed from \'{oldName}\' to \'{newName}\'',
      groupDeleted: 'Group \'{groupName}\' deleted',
      hostRenamed: 'Host renamed from \'{oldName}\' to \'{newName}\'',
      hostDeleted: 'Host \'{hostName}\' deleted',
      hostNameConflict: 'Host \'{hostName}\' has the same name as a user.<br />Please rename the host.',
      policyDeleted: 'Policy #\'{policyNumber}\' deleted',
      sshRuleDeleted: 'SSH Rule #\'{ruleNumber}\' deleted',
      tagRenamed: 'Tag renamed from \'{oldName}\' to \'{newName}\'',
      tagDeleted: 'Tag \'{tagName}\' deleted',
      unableToGetPolicy: 'Unable to get policy from server',
      groupNameMustBeLowercase: 'Group name must be lowercase',
      groupNameLimited: 'Group name is limited to: lowercase alphabet, digits, dashes, and periods',
      tagNameNoSpaces: 'Tag name must contain no spaces',
      hostNameLimited: 'Host name is limited to: lowercase alphabet, digits, dashes, and periods',
      invalidHostIpOrCidr: 'Invalid Host IP or CIDR',
      hostAlreadyExists: 'Host \"{name}\" already exists',
      hostDoesNotExist: 'Host \'{name}\' does not exist',
      hostNewAlreadyExists: 'Host \'{nameNew}\' already exists',
      tagDoesNotExist: 'Tag \'{stripped}\' does not exist',
      tagOldDoesNotExist: 'Tag \'{strippedOld}\' does not exist',
      groupAlreadyExists: 'Group \'{stripped}\' already exists',
      groupOldDoesNotExist: 'Group \'{strippedOld}\' does not exist',
      groupDoesNotExist: 'Group \'{stripped}\' does not exist',
      policyDoesNotExist: 'Policy does not exist at index \'{idx}\'',
      policyCreated: 'Policy #{policyNumber} created',
      noSshRulesDefined: 'No SSH Rules defined',
      sshRuleDoesNotExist: 'SSH Rule does not exist at index \'{idx}\'',
      savedAclConfiguration: 'Saved ACL Configuration',
      tabCustom: 'Custom',
      tabUser: 'User',
      tabHost: 'Host',
      tabGroup: 'Group',
      tabTag: 'Tag',
      usernames: 'Usernames',
      policyNumber: 'Policy #{number}',
      sshRuleNumber: 'SSH Rule #{number}',
      policyLoaded: 'Loaded ACL policy from server',
      hostCreated: 'Host \'{hostName}\' created',
      host: 'Host',
      tagCreated: 'Tag Ownership of \'{tagName}\' created',
      groupCreated: 'Group \'{groupName}\' created',
      sshRuleCreated: 'Created SSH Rule #{number}',
      tag: 'Tag',
      group: 'Group',
    },
    deploy: {
      title: 'Deploy',
      general: 'General:',
      advertise: 'Advertise:',
      accept: 'Accept:',
      saveDefaults: 'Save Defaults',
      shieldsUp: 'Shields Up',
      shieldsUpHelp: 'Block incoming connections',
      generateQR: 'Generate QR Code',
      generateQRHelp: 'Create a scannable QR code to import into TailScale client',
      reset: 'Reset',
      resetHelp: 'Reset unspecified settings to default values',
      operator: 'Operator',
      operatorHelp: '(Unix Only) Run as a different user',
      forceReauth: 'Force Reauthentication',
      forceReauthHelp: 'Force user to re-authenticate to Headscale server',
      sshServer: 'SSH Server',
      sshServerHelp: 'Run a local SSH server accessible by administrators',
      preAuthKey: 'PreAuth Key',
      preAuthKeyHelp: 'A generated key to automatically authenticate the node for a given user',
      unattended: 'Unattended',
      unattendedHelp: 'Run the tailscale client in unattended mode (on startup)',
      allowLanAccess: 'Allow LAN Access',
      allowLanAccessHelp: 'Allow local network access while connected to the TailNet and using an exit node',
      advertiseExitNode: 'Advertise Exit Node',
      advertiseExitNodeHelp: 'Allow other nodes on the TailNet to use this node as a gateway',
      advertiseExitNodeLocalAccess: 'Advertise Exit Node Local Access',
      advertiseTags: 'Advertise Tags',
      advertiseTagsHelp: 'List of advertised tags to apply to a machine on provisioning',
      advertiseRoutes: 'Advertise Routes',
      advertiseRoutesHelp: 'List of subnets which are reachable via this node',
      acceptDns: 'Accept DNS',
      acceptDnsHelp: 'Accept the HeadScale-provided DNS settings',
      acceptRoutes: 'Accept Routes',
      acceptRoutesHelp: "Accept other nodes' advertised subnets",
      acceptExitNode: 'Exit Node',
      acceptExitNodeHelp: 'Use this node as a gateway (target node must advertise exit node)',
      copyCommand: 'Copy Command to Clipboard',
      copiedToClipboard: 'Copied Command to Clipboard',
      savedDeploymentDefaults: 'Saved Deployment Defaults',
    },
  },
  zh: {
    common: {
      save: '保存',
      cancel: '取消',
      delete: '删除',
      edit: '编辑',
      create: '创建',
      search: '搜索',
      loading: '加载中',
      error: '错误',
      success: '成功',
      warning: '警告',
      info: '信息',
      confirm: '确认',
      yes: '是',
      no: '否',
      online: '在线',
      offline: '离线',
      all: '全部',
      newItemName: '新{title}名称...',
      itemValue: '{title}值...',
      languageEnglish: 'English',
      languageChinese: '中文',
      navigation: '导航',
      created: '创建时间',
      id: 'ID',
      name: '名称',
      ipAddresses: 'IP 地址',
      ipv4Address: 'IPv4 地址',
      tags: '标签',
      owner: '所有者',
      newOwner: '新所有者',
      lastSeen: '最后在线',
      expires: '过期时间',
      hostname: '主机名',
      registerMethod: '注册方式',
      routes: '路由',
      email: '邮箱',
      displayName: '显示名称',
      provider: '提供商',
      hideInvalid: '隐藏无效',
      any: '任意',
      tcp: 'TCP',
      udp: 'UDP',
      icmp: 'ICMP',
      add: '添加',
      deleteUser: '删除用户',
      deleteNode: '删除节点',
      noResultsFound: '未找到结果',
      membersOf: '成员',
      selectMembersOf: '选择成员',
      selectOwnersOf: '选择所有者',
      selectPlaceholder: '选择...',
      ownersOf: '所有者',
      advertisedTags: '宣告标签',
      userDeleted: '已删除用户 "{name}" (ID: {id})',
      userCreateSuccess: '已创建用户 "{name}"',
      userCreateFailed: '创建用户 "{name}" 失败',
      userDeleteFailed: '删除用户 "{name}" ({id}) 失败',
      userDeleteFailedWithNodes: '删除用户 "{name}" ({id}) 失败。仍有节点存在。',
      nodeDeleted: '已删除机器 "{name}" ({id})',
      nodeCreateSuccess: '已创建节点 "{name}"',
      nodeCreateFailed: '创建节点失败',
      nodeDeleteFailed: '删除机器 "{name}" ({id}) 失败',
      userNameNotEmpty: '用户名不能为空',
      nodeNameNotEmpty: '节点名不能为空',
      usernameAndDeviceKeyRequired: '用户名和设备密钥是必需的',
      tagShouldBeLowercaseAlphanumeric: '标签应为小写字母数字单词',
      invalidCIDRFormat: '无效的CIDR格式',
      invalidTags: '无效标签: {error}',
      copiedToClipboard: '已复制到剪贴板！',
      failedToCopyToClipboard: '复制到剪贴板失败！',
      doesNotExpire: '永不过期',
      validKeys: '个有效密钥',
      nodeOwnerChanged: '已将 {nodeName} 的所有者从 "{oldOwner}" 更改为 "{newOwner}"',
      user: '用户',
      timeFromNow: '后',
      timeAgo: '前',
      timeMonth: '个月',
      timeMonths: '个月',
      timeWeek: '周',
      timeWeeks: '周',
      timeDay: '天',
      timeDays: '天',
      timeHour: '小时',
      timeHours: '小时',
      timeMinute: '分钟',
      timeMinutes: '分钟',
      timeSecond: '秒',
      timeSeconds: '秒',
      onlineNow: '当前在线',
    },
    navigation: {
      home: '首页',
      users: '用户',
      nodes: '节点',
      deploy: '部署',
      routes: '路由',
      acls: '访问控制',
      aclBuilder: '访问控制构建器',
      settings: '设置',
    },
    home: {
      title: '首页',
      totalUsers: '总用户数',
      onlineUsers: '在线用户数',
      validPreAuthKeys: '有效预授权密钥',
      totalNodes: '总节点数',
      onlineNodes: '在线节点数',
      totalRoutes: '总路由数',
    },
    settings: {
      title: '设置',
      apiUrl: 'API URL',
      apiKey: 'API 密钥',
      apiRefreshInterval: 'API 刷新间隔（秒）',
      consoleDebugging: '控制台调试',
      theme: '主题',
      language: '语言',
      saveSettings: '保存设置',
      enterApiKey: '输入您的 API 密钥',
      showApiKey: '显示 API 密钥',
      hideApiKey: '隐藏 API 密钥',
      refreshApiKey: '刷新 API 密钥',
      authorized: '已授权',
      notAuthorized: '未授权',
      checkingAuthorization: '检查授权中',
      expiresIn: '过期时间',
      logUsers: '记录用户',
      logNodes: '记录节点',
      logPreAuthKeys: '记录预授权密钥',
      logApiKeyInfo: '记录 API 密钥信息',
      apiKeyUnauthorized: 'API 密钥未授权或无效',
      apiKeyExpiresSoon: 'API 密钥即将过期',
      savedSettings: '已保存设置',
    },
    users: {
      title: '用户',
      createUser: '创建用户',
      id: 'ID',
      name: '名称',
      newUsername: '新用户名...',
      sortId: '按 ID 排序',
      sortName: '按名称排序',
      filterAll: '全部',
      filterOnline: '在线',
      filterOffline: '离线',
      preAuthKeys: '预授权密钥',
      nodes: '节点',
      ephemeral: '临时',
      reusable: '可重用',
    },
    nodes: {
      title: '节点',
      createNode: '创建节点',
      id: 'ID',
      name: '名称',
      lastSeen: '最后在线',
      preAuthKey: '预授权密钥',
      cli: '命令行',
      oidc: 'OIDC',
      unspecified: '未指定',
      deviceKey: '设备密钥',
      sortId: '按 ID 排序',
      sortName: '按名称排序',
      sortLastSeen: '按最后在线排序',
      filterAll: '全部',
      filterOnline: '在线',
      filterOffline: '离线',
    },
    routes: {
      title: '路由',
      id: 'ID',
      name: '名称',
      sortId: '按 ID 排序',
      sortName: '按名称排序',
      filterAll: '全部',
      filterOnline: '在线',
      filterOffline: '离线',
    },
    acls: {
      title: '访问控制构建器',
      groups: '组',
      tagOwners: '标签所有者',
      hosts: '主机',
      policies: '策略',
      ssh: 'SSH',
      config: '配置',
      srcObject: '源对象...',
      dstObject: '目标对象...',
      dstPorts: '目标端口...',
      createGroup: '创建组',
      createTag: '创建标签',
      createHost: '创建主机',
      createPolicy: '创建策略',
      createSshRule: '创建 SSH 规则',
      filterGroups: '过滤组...',
      filterTags: '过滤标签...',
      filterHosts: '过滤主机...',
      filterPolicies: '过滤策略...',
      filterSshRules: '过滤 SSH 规则...',
      saveConfig: '保存配置',
      loadConfig: '加载配置',
      editConfig: '编辑配置',
      applyConfig: '应用配置',
      cancelEditing: '取消编辑',
      resetConfig: '重置配置',
      protocol: '协议',
      sources: '源',
      destinations: '目标',
      groupRenamed: '组已从 \'{oldName}\' 重命名为 \'{newName}\'',
      groupDeleted: '组 \'{groupName}\' 已删除',
      hostRenamed: '主机已从 \'{oldName}\' 重命名为 \'{newName}\'',
      hostDeleted: '主机 \'{hostName}\' 已删除',
      hostNameConflict: '主机 \'{hostName}\' 与用户同名。<br />请重命名该主机。',
      policyDeleted: '策略 #\'{policyNumber}\' 已删除',
      sshRuleDeleted: 'SSH 规则 #\'{ruleNumber}\' 已删除',
      tagRenamed: '标签已从 \'{oldName}\' 重命名为 \'{newName}\'',
      tagDeleted: '标签 \'{tagName}\' 已删除',
      unableToGetPolicy: '无法从服务器获取策略',
      groupNameMustBeLowercase: '组名必须为小写',
      groupNameLimited: '组名限制为：小写字母、数字、连字符和句点',
      tagNameNoSpaces: '标签名不能包含空格',
      hostNameLimited: '主机名限制为：小写字母、数字、连字符和句点',
      invalidHostIpOrCidr: '无效的主机 IP 或 CIDR',
      hostAlreadyExists: '主机 \"{name}\" 已存在',
      hostDoesNotExist: '主机 \'{name}\' 不存在',
      hostNewAlreadyExists: '主机 \'{nameNew}\' 已存在',
      tagDoesNotExist: '标签 \'{stripped}\' 不存在',
      tagOldDoesNotExist: '标签 \'{strippedOld}\' 不存在',
      groupAlreadyExists: '组 \'{stripped}\' 已存在',
      groupOldDoesNotExist: '组 \'{strippedOld}\' 不存在',
      groupDoesNotExist: '组 \'{stripped}\' 不存在',
      policyDoesNotExist: '索引 \'{idx}\' 的策略不存在',
      policyCreated: '策略 #{policyNumber} 已创建',
      noSshRulesDefined: '未定义 SSH 规则',
      sshRuleDoesNotExist: '索引 \'{idx}\' 的 SSH 规则不存在',
      savedAclConfiguration: '已保存 ACL 配置',
      tabCustom: '自定义',
      tabUser: '用户',
      tabHost: '主机',
      tabGroup: '组',
      tabTag: '标签',
      usernames: '用户名',
      policyNumber: '策略 #{number}',
      sshRuleNumber: 'SSH 规则 #{number}',
      policyLoaded: '已从服务器加载 ACL 策略',
      hostCreated: '主机 \'{hostName}\' 已创建',
      host: '主机',
      tagCreated: '标签所有权 \'{tagName}\' 已创建',
      groupCreated: '组 \'{groupName}\' 已创建',
      sshRuleCreated: '已创建 SSH 规则 #{number}',
      tag: '标签',
      group: '组',
    },
    deploy: {
      title: '部署',
      general: '常规',
      advertise: '宣告',
      accept: '接受',
      saveDefaults: '保存默认设置',
      shieldsUp: '防护模式',
      shieldsUpHelp: '阻止所有传入连接',
      generateQR: '生成二维码',
      generateQRHelp: '创建可扫描的二维码以导入到 Tailscale 客户端',
      reset: '重置',
      resetHelp: '将未指定的设置重置为默认值',
      operator: '操作员',
      operatorHelp: '（仅限 Unix）以不同用户身份运行',
      forceReauth: '强制重新认证',
      forceReauthHelp: '强制用户重新认证到 Headscale 服务器',
      sshServer: 'SSH 服务器',
      sshServerHelp: '运行可由管理员访问的本地 SSH 服务器',
      preAuthKey: '预授权密钥',
      preAuthKeyHelp: '为指定用户自动认证节点的生成密钥',
      unattended: '无人值守模式',
      unattendedHelp: '在无人值守模式下运行 tailscale 客户端（启动时）',
      allowLanAccess: '允许局域网访问',
      allowLanAccessHelp: '连接到 Tailnet 并使用出口节点时允许本地网络访问',
      advertiseExitNode: '宣告出口节点',
      advertiseExitNodeHelp: '允许 Tailnet 上的其他节点使用此节点作为网关',
      advertiseExitNodeLocalAccess: '宣告出口节点本地访问',
      advertiseTags: '宣告标签',
      advertiseTagsHelp: '在配置时应用到机器的宣告标签列表',
      advertiseRoutes: '宣告路由',
      advertiseRoutesHelp: '可通过此节点访问的子网列表',
      acceptDns: '接受 DNS',
      acceptDnsHelp: '接受 Headscale 提供的 DNS 设置',
      acceptRoutes: '接受路由',
      acceptRoutesHelp: '接受其他节点的宣告子网',
      acceptExitNode: '出口节点',
      acceptExitNodeHelp: '使用此节点作为网关（目标节点必须宣告出口节点）',
      copyCommand: '复制命令到剪贴板',
      copiedToClipboard: '命令已复制到剪贴板',
      savedDeploymentDefaults: '已保存部署默认设置',
    },
  },
};

export const availableLanguages = Object.keys(translations) as Language[];

export function getTranslation(language: Language): Translation;
export function getTranslation(language: Language, key: string, params?: Record<string, string>): string;
export function getTranslation(language: Language, key?: string, params?: Record<string, string>): Translation | string {
  const translation = translations[language] || translations.en;

  if (!key) {
    return translation;
  }

  const keys = key.split('.');
  let value: any = translation;

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key;
    }
  }

  if (typeof value === 'string') {

    if (params) {
      return value.replace(/\{(\w+)\}/g, (match, paramName) => {
        return params[paramName] || match;
      });
    }
    return value;
  }

  return key;
}

export function getCurrentLanguage(): Language {
  if (typeof window !== 'undefined') {
    const savedRaw = localStorage.getItem('headscale-admin-language');
    if (savedRaw) {
      let saved: unknown = savedRaw;
      try {
        saved = JSON.parse(savedRaw);
      } catch {
        // fall back to raw string (older versions stored plain text)
      }
      if (typeof saved === 'string' && availableLanguages.includes(saved as Language)) {
        return saved as Language;
      }
    }


    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('zh')) {
      return 'zh';
    }
  }
  return 'en';
}

export function setLanguage(language: Language): void {
  if (typeof window !== 'undefined') {
    // storage is handled by StateLocal via JSON serialization; avoid double-writing plain text here
    // keep a lightweight side-effect for document language
    try {
      document.documentElement.setAttribute('lang', language);
    } catch {
      // ignore
    }
  }
}