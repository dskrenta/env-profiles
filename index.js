#!/usr/bin/env node

const path = require('path')
const yaml = require('js-yaml')
const fs = require('fs')

function main () {
  try {
    const cwd = process.cwd()
    const profile = process.argv[2]
    const profiles = yaml.load(fs.readFileSync(path.join(cwd, 'env.yml')))

    if (profile in profiles) {
      const defaultProfile = profiles['default']
      const selectedProfile = profiles[profile]
      const env = { ...defaultProfile, ...selectedProfile }
      const envStr = Object.keys(env).map(envKey => `${envKey}=${env[envKey]}\n`).join('')

      fs.writeFileSync(path.join(cwd, '.env'), envStr)

      console.log(`Switched to the ${profile} profile`)
    } else {
      console.error(`${profile} not found in profiles`)
    }
  } catch (error) {
    console.error(error)
  }
}

if (require.main === module) {
  main()
}

module.exports = main
