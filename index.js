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
      const envStr = Object.keys(env).map(envKey => `${envKey}: ${env[envKey]}\n\n`).join('').trim()

      fs.writeFileSync(path.join(cwd, '.env'), envStr)
    } else {
      console.error(`${profile} not found in profiles`)
    }
  } catch (error) {
    console.error(error)
  }
}

main()
