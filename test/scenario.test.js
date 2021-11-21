const { validateArgs, validateFileExist, validateConfig } = require('../validation/validation');
const { execFile } = require('child_process');

describe('Error scenarios', () => {
  test('Input: User passes the same cli argument twice', () => {
    execFile(
      'node',
      ['my_ciphering_cli', '-c', 'C1-C1-A-R0', '-c', 'C0'],
      (error, stdout, stderr) => {
        if (error) {
        } else {
          expect(stdout).toEqual('Arguments must not be repeated!');
        }
      },
    );
  });

  test('Input: User doesn`t pass -c or --config argument', () => {
    execFile('node', ['my_ciphering_cli'], (error, stdout, stderr) => {
      expect(stderr).toEqual('Error: Missing arg: -c, --config');
    });
  });

  test('Input: User passes -i argument with path that doesn`t exist or with no read access', () => {
    execFile(
      'node',
      ['my_ciphering_cli', '-c', 'C1', '-i', './asdax.txt'],
      (error, stdout, stderr) => {
        expect(stderr).toEqual('Error: No such file or directory: ./asdax.txt');
      },
    );
  });

  test('Input: User passes -i argument with path that doesn`t exist or with no read access', () => {
    execFile(
      'node',
      ['my_ciphering_cli', '-c', 'C1', '-o', './sdxzj.txt'],
      (error, stdout, stderr) => {
        expect(stderr).toEqual('Error: No such file or directory: ./sdxzj.txt');
      },
    );
  });

  test('Input: User passes incorrent symbols in argument for --config', () => {
    execFile('node', ['my_ciphering_cli', '-c', 'C1-Casd'], (error, stdout, stderr) => {
      expect(stderr).toEqual('Error: Please check the data transferred to the config!');
    });
  });
});

describe('Success scenarios', () => {
  test('should work properly if the config is correct', () => {
    execFile(
      'node',
      [
        'my_ciphering_cli',
        '--config',
        'A-A-R1-A-C1-C0-A-A-C0-A-C0-R0-C1-R0-R1-A-R1-R1-C0-R1-R0-C1-C1-A',
        '-i',
        './input.txt',
      ],
      (error, stdout, stderr) => {
        if (error) {
        } else {
          expect(stdout).toEqual('Drsc sc combod. Wocckqo klyed "_" ciwlyv!\n');
        }
      },
    );
  });

  test('should be equal to result', () => {
    execFile(
      'node',
      ['my_ciphering_cli', '-c', 'C1-C1-R0-A', '-i', './input.txt'],
      (error, stdout, stderr) => {
        if (error) {
        } else {
          expect(stdout).toEqual('Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!\n');
        }
      },
    );
  });

  test('should be equal to result', () => {
    execFile(
      'node',
      ['my_ciphering_cli', '-c', 'C1-C0-A-R1-R0-A-R0-R0-C1-A', '-i', './input.txt'],
      (error, stdout, stderr) => {
        if (error) {
        } else {
          expect(stdout).toEqual('Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!\n');
        }
      },
    );
  });

  test('should be equal to result', () => {
    execFile(
      'node',
      ['my_ciphering_cli', '-c', 'A-A-A-R1-R0-R0-R0-C1-C1-A', '-i', './input.txt'],
      (error, stdout, stderr) => {
        if (error) {
        } else {
          expect(stdout).toEqual('Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!\n');
        }
      },
    );
  });

  test('should be equal to result', () => {
    execFile(
      'node',
      ['my_ciphering_cli', '-c', 'C1-R1-C0-C0-A-R0-R1-R1-A-C1', '-i', './input.txt'],
      (error, stdout, stderr) => {
        if (error) {
        } else {
          expect(stdout).toEqual('This is secret. Message about "_" symbol!\n');
        }
      },
    );
  });
});
