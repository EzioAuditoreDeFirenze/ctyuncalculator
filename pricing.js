// 天翼云主机价格配置
const pricingData = {
    // 通用型
    's8e': { cpuMonthly: 46, cpuHourly: 0.096, memMonthly: 17, memHourly: 0.035, type: 'general', discount: [0.8, 0.78, 0.75, 0.73, 0.72] },
    's8r': { cpuMonthly: 46, cpuHourly: 0.096, memMonthly: 17, memHourly: 0.035, type: 'general', discount: [0.85, 0.85, 0.85, 0.85, 0.85] },
    's8': { cpuMonthly: 46, cpuHourly: 0.096, memMonthly: 17, memHourly: 0.035, type: 'general', discount: [0.8, 0.78, 0.75, 0.73, 0.72] },
    's7': { cpuMonthly: 45.69, cpuHourly: 0.095, memMonthly: 16.31, memHourly: 0.034, type: 'general', discount: [0.8, 0.78, 0.75, 0.73, 0.72] },
    's6': { cpuMonthly: 45, cpuHourly: 0.025, memMonthly: 16, memHourly: 0.08, type: 'general', discount: [0.6, 0.55, 0.3, 0.3, 0.3] },
    's3': { cpuMonthly: 45, cpuHourly: 0.025, memMonthly: 16, memHourly: 0.08, type: 'general', discount: [0.6, 0.55, 0.3, 0.3, 0.3] },
    's2': { cpuMonthly: 45, cpuHourly: 0.025, memMonthly: 16, memHourly: 0.08, type: 'general', discount: [0.85, 0.7, 0.5, 0.45, 0.4] },
    
    // 计算型
    'c8a': { cpuMonthly: 61, cpuHourly: 0.127, memMonthly: 14, memHourly: 0.029, type: 'compute', discount: [0.6, 0.6, 0.6, 0.6, 0.6] },
    'c8e': { cpuMonthly: 74, cpuHourly: 0.154, memMonthly: 14, memHourly: 0.029, type: 'compute', discount: [0.8, 0.78, 0.75, 0.73, 0.72] },
    'c8': { cpuMonthly: 74, cpuHourly: 0.154, memMonthly: 14, memHourly: 0.029, type: 'compute', discount: [0.8, 0.78, 0.75, 0.73, 0.72] },
    'c7': { cpuMonthly: 73, cpuHourly: 0.152, memMonthly: 14, memHourly: 0.029, type: 'compute', discount: [0.8, 0.78, 0.75, 0.73, 0.72] },
    'c6': { cpuMonthly: 85, cpuHourly: 0.18, memMonthly: 10, memHourly: 0.02, type: 'compute', discount: [0.6, 0.55, 0.3, 0.3, 0.3] },
    'c3': { cpuMonthly: 85, cpuHourly: 0.18, memMonthly: 10, memHourly: 0.02, type: 'compute', discount: [0.6, 0.55, 0.3, 0.3, 0.3] },
    
    // 内存型
    'm8a': { cpuMonthly: 42, cpuHourly: 0.088, memMonthly: 14, memHourly: 0.029, type: 'memory', discount: [0.6, 0.6, 0.6, 0.6, 0.6] },
    'm8e': { cpuMonthly: 60, cpuHourly: 0.125, memMonthly: 14, memHourly: 0.029, type: 'memory', discount: [0.8, 0.78, 0.75, 0.73, 0.72] },
    'm8': { cpuMonthly: 60, cpuHourly: 0.125, memMonthly: 14, memHourly: 0.029, type: 'memory', discount: [0.8, 0.78, 0.75, 0.73, 0.72] },
    'm7': { cpuMonthly: 58.43, cpuHourly: 0.124, memMonthly: 14, memHourly: 0.029, type: 'memory', discount: [0.8, 0.78, 0.75, 0.73, 0.72] },
    'm6': { cpuMonthly: 85, cpuHourly: 0.18, memMonthly: 10, memHourly: 0.02, type: 'memory', discount: [0.6, 0.55, 0.3, 0.3, 0.3] },
    'm3': { cpuMonthly: 85, cpuHourly: 0.18, memMonthly: 10, memHourly: 0.02, type: 'memory', discount: [0.6, 0.55, 0.3, 0.3, 0.3] },
    'm2': { cpuMonthly: 45, cpuHourly: 0.025, memMonthly: 16, memHourly: 0.08, type: 'memory', discount: [0.85, 0.7, 0.5, 0.45, 0.4] },
    
    // 增强型
    'c8ne': { cpuMonthly: 81, cpuHourly: 0.169, memMonthly: 16, memHourly: 0.033, type: 'enhanced', discount: [0.85, 0.7, 0.5, 0.45, 0.4] },
    'm8ne': { cpuMonthly: 66, cpuHourly: 0.138, memMonthly: 16, memHourly: 0.033, type: 'enhanced', discount: [0.85, 0.7, 0.5, 0.45, 0.4] },
    'c7ne': { cpuMonthly: 75, cpuHourly: 0.156, memMonthly: 15, memHourly: 0.031, type: 'enhanced', discount: [0.85, 0.7, 0.5, 0.45, 0.4] },
    
    // 鲲鹏系列
    'ks2x': { cpuMonthly: 52, cpuHourly: 0.1084, memMonthly: 15, memHourly: 0.0313, type: 'kunpeng', discount: [0.95, 0.9, 0.85, 0.85, 0.85] },
    'ks1': { cpuMonthly: 52, cpuHourly: 0.1084, memMonthly: 15, memHourly: 0.0313, type: 'kunpeng', discount: [0.85, 0.7, 0.5, 0.5, 0.5] },
    'kc2x': { cpuMonthly: 104, cpuHourly: 0.2167, memMonthly: 15, memHourly: 0.0313, type: 'kunpeng', discount: [0.95, 0.9, 0.85, 0.85, 0.85] },
    'kc1': { cpuMonthly: 104, cpuHourly: 0.2167, memMonthly: 15, memHourly: 0.0313, type: 'kunpeng', discount: [0.85, 0.7, 0.5, 0.5, 0.5] },
    'km2x': { cpuMonthly: 104, cpuHourly: 0.2167, memMonthly: 15, memHourly: 0.0313, type: 'kunpeng', discount: [0.95, 0.9, 0.85, 0.85, 0.85] },
    'km1': { cpuMonthly: 104, cpuHourly: 0.2167, memMonthly: 15, memHourly: 0.0313, type: 'kunpeng', discount: [0.85, 0.7, 0.5, 0.5, 0.5] },
    // 鲲鹏网络增强系列 (参考鲲鹏系列定价)
    'ks2xne': { cpuMonthly: 52, cpuHourly: 0.1084, memMonthly: 15, memHourly: 0.0313, type: 'kunpeng', discount: [0.95, 0.9, 0.85, 0.85, 0.85] },
    'kc2xne': { cpuMonthly: 104, cpuHourly: 0.2167, memMonthly: 15, memHourly: 0.0313, type: 'kunpeng', discount: [0.95, 0.9, 0.85, 0.85, 0.85] },
    'km2xne': { cpuMonthly: 104, cpuHourly: 0.2167, memMonthly: 15, memHourly: 0.0313, type: 'kunpeng', discount: [0.95, 0.9, 0.85, 0.85, 0.85] },
    
    // 海光系列
    'hs3x': { cpuMonthly: 45, cpuHourly: 0.0938, memMonthly: 16, memHourly: 0.0333, type: 'haiguang', discount: [0.95, 0.9, 0.85, 0.85, 0.85] },
    'hs1': { cpuMonthly: 45, cpuHourly: 0.0938, memMonthly: 16, memHourly: 0.0333, type: 'haiguang', discount: [0.85, 0.7, 0.5, 0.5, 0.5] },
    'hc3x': { cpuMonthly: 89, cpuHourly: 0.1854, memMonthly: 14, memHourly: 0.0292, type: 'haiguang', discount: [0.95, 0.9, 0.85, 0.85, 0.85] },
    'hc1': { cpuMonthly: 89, cpuHourly: 0.1854, memMonthly: 14, memHourly: 0.0292, type: 'haiguang', discount: [0.85, 0.7, 0.5, 0.5, 0.5] },
    'hm3x': { cpuMonthly: 89, cpuHourly: 0.1854, memMonthly: 14, memHourly: 0.0292, type: 'haiguang', discount: [0.95, 0.9, 0.85, 0.85, 0.85] },
    'hm1': { cpuMonthly: 89, cpuHourly: 0.1854, memMonthly: 14, memHourly: 0.0292, type: 'haiguang', discount: [0.85, 0.7, 0.5, 0.5, 0.5] },
    // 海光网络增强系列 (参考海光系列定价)
    'hs3xne': { cpuMonthly: 45, cpuHourly: 0.0938, memMonthly: 16, memHourly: 0.0333, type: 'haiguang', discount: [0.95, 0.9, 0.85, 0.85, 0.85] },
    'hc3xne': { cpuMonthly: 89, cpuHourly: 0.1854, memMonthly: 14, memHourly: 0.0292, type: 'haiguang', discount: [0.95, 0.9, 0.85, 0.85, 0.85] },
    'hm3xne': { cpuMonthly: 89, cpuHourly: 0.1854, memMonthly: 14, memHourly: 0.0292, type: 'haiguang', discount: [0.95, 0.9, 0.85, 0.85, 0.85] },
    // 海光安全增强系列 (参考海光系列定价)
    'hc4t': { cpuMonthly: 89, cpuHourly: 0.1854, memMonthly: 14, memHourly: 0.0292, type: 'haiguang', discount: [0.95, 0.9, 0.85, 0.85, 0.85] },
    'hm4t': { cpuMonthly: 89, cpuHourly: 0.1854, memMonthly: 14, memHourly: 0.0292, type: 'haiguang', discount: [0.95, 0.9, 0.85, 0.85, 0.85] },
    
    // 飞腾系列
    'ft2x': { cpuMonthly: 45, cpuHourly: 0.0938, memMonthly: 16, memHourly: 0.0333, type: 'feiteng', discount: [0.95, 0.9, 0.85, 0.85, 0.85] },
    'ft1': { cpuMonthly: 45, cpuHourly: 0.0938, memMonthly: 16, memHourly: 0.0333, type: 'feiteng', discount: [0.85, 0.7, 0.5, 0.5, 0.5] },
    // 飞腾网络增强系列 (参考飞腾系列定价)
    'fs1': { cpuMonthly: 45, cpuHourly: 0.0938, memMonthly: 16, memHourly: 0.0333, type: 'feiteng', discount: [0.85, 0.7, 0.5, 0.5, 0.5] },
    'fc1': { cpuMonthly: 45, cpuHourly: 0.0938, memMonthly: 16, memHourly: 0.0333, type: 'feiteng', discount: [0.85, 0.7, 0.5, 0.5, 0.5] },
    'fm1': { cpuMonthly: 45, cpuHourly: 0.0938, memMonthly: 16, memHourly: 0.0333, type: 'feiteng', discount: [0.85, 0.7, 0.5, 0.5, 0.5] },
    
    // 经济型
    'e': { cpuMonthly: 24, cpuHourly: 0.047619, memMonthly: 12, memHourly: 0.023810, type: 'economic', discount: [0.34, 0.25, 0.21, 0.21, 0.21] }
};

// 规格配置表 - 定义每种规格支持的CPU和内存组合
const specConfigs = {
    // 通用型 s8e: CPU/内存配比 1:2 或 1:4, vCPU范围 2-192
    's8e': [
        {cpu: 2, mem: 4}, {cpu: 2, mem: 8},
        {cpu: 4, mem: 8}, {cpu: 4, mem: 16},
        {cpu: 8, mem: 16}, {cpu: 8, mem: 32},
        {cpu: 12, mem: 24}, {cpu: 12, mem: 48},
        {cpu: 16, mem: 32}, {cpu: 16, mem: 64},
        {cpu: 24, mem: 48}, {cpu: 24, mem: 96},
        {cpu: 32, mem: 64}, {cpu: 32, mem: 128},
        {cpu: 64, mem: 128}, {cpu: 64, mem: 256},
        {cpu: 96, mem: 192}, {cpu: 96, mem: 384},
        {cpu: 128, mem: 256}, {cpu: 128, mem: 512},
        {cpu: 192, mem: 384}, {cpu: 192, mem: 768}
    ],
    // 通用型 s8r: CPU/内存配比 1:2 或 1:4, vCPU范围 2-128
    's8r': [
        {cpu: 2, mem: 4}, {cpu: 2, mem: 8},
        {cpu: 4, mem: 8}, {cpu: 4, mem: 16},
        {cpu: 8, mem: 16}, {cpu: 8, mem: 32},
        {cpu: 12, mem: 24}, {cpu: 12, mem: 48},
        {cpu: 16, mem: 32}, {cpu: 16, mem: 64},
        {cpu: 24, mem: 48}, {cpu: 24, mem: 96},
        {cpu: 32, mem: 64}, {cpu: 32, mem: 128},
        {cpu: 64, mem: 128}, {cpu: 64, mem: 256},
        {cpu: 96, mem: 192}, {cpu: 96, mem: 384},
        {cpu: 128, mem: 256}, {cpu: 128, mem: 512}
    ],
    // 通用型 s8: CPU/内存配比 1:2 或 1:4, vCPU范围 2-96
    's8': [
        {cpu: 2, mem: 4}, {cpu: 2, mem: 8},
        {cpu: 4, mem: 8}, {cpu: 4, mem: 16},
        {cpu: 8, mem: 16}, {cpu: 8, mem: 32},
        {cpu: 12, mem: 24}, {cpu: 12, mem: 48},
        {cpu: 16, mem: 32}, {cpu: 16, mem: 64},
        {cpu: 24, mem: 48}, {cpu: 24, mem: 96},
        {cpu: 32, mem: 64}, {cpu: 32, mem: 128},
        {cpu: 64, mem: 128}, {cpu: 64, mem: 256},
        {cpu: 96, mem: 192}, {cpu: 96, mem: 384}
    ],
    // 通用型 s7: CPU/内存配比 1:1/1:2/1:4, vCPU范围 1-32
    's7': [
        {cpu: 1, mem: 1}, {cpu: 1, mem: 2}, {cpu: 1, mem: 4},
        {cpu: 2, mem: 2}, {cpu: 2, mem: 4}, {cpu: 2, mem: 8},
        {cpu: 4, mem: 4}, {cpu: 4, mem: 8}, {cpu: 4, mem: 16},
        {cpu: 8, mem: 8}, {cpu: 8, mem: 16}, {cpu: 8, mem: 32},
        {cpu: 16, mem: 16}, {cpu: 16, mem: 32}, {cpu: 16, mem: 64},
        {cpu: 32, mem: 32}, {cpu: 32, mem: 64}, {cpu: 32, mem: 128}
    ],
    // 通用型 s6: CPU/内存配比 1:1/1:2/1:4, vCPU范围 1-16
    's6': [
        {cpu: 1, mem: 1}, {cpu: 1, mem: 2}, {cpu: 1, mem: 4},
        {cpu: 2, mem: 2}, {cpu: 2, mem: 4}, {cpu: 2, mem: 8},
        {cpu: 4, mem: 4}, {cpu: 4, mem: 8}, {cpu: 4, mem: 16},
        {cpu: 8, mem: 8}, {cpu: 8, mem: 16}, {cpu: 8, mem: 32},
        {cpu: 16, mem: 16}, {cpu: 16, mem: 32}, {cpu: 16, mem: 64}
    ],
    // 通用型 s3: CPU/内存配比 1:1/1:2/1:4, vCPU范围 1-16
    's3': [
        {cpu: 1, mem: 1}, {cpu: 1, mem: 2}, {cpu: 1, mem: 4},
        {cpu: 2, mem: 2}, {cpu: 2, mem: 4}, {cpu: 2, mem: 8},
        {cpu: 4, mem: 4}, {cpu: 4, mem: 8}, {cpu: 4, mem: 16},
        {cpu: 8, mem: 8}, {cpu: 8, mem: 16}, {cpu: 8, mem: 32},
        {cpu: 16, mem: 16}, {cpu: 16, mem: 32}, {cpu: 16, mem: 64}
    ],
    // 通用型 s2: CPU/内存配比 1:1/1:2/1:4, vCPU范围 1-32
    's2': [
        {cpu: 1, mem: 1}, {cpu: 1, mem: 2}, {cpu: 1, mem: 4},
        {cpu: 2, mem: 2}, {cpu: 2, mem: 4}, {cpu: 2, mem: 8},
        {cpu: 4, mem: 4}, {cpu: 4, mem: 8}, {cpu: 4, mem: 16},
        {cpu: 8, mem: 8}, {cpu: 8, mem: 16}, {cpu: 8, mem: 32},
        {cpu: 16, mem: 16}, {cpu: 16, mem: 32}, {cpu: 16, mem: 64},
        {cpu: 32, mem: 32}, {cpu: 32, mem: 64}, {cpu: 32, mem: 128}
    ],
    // 计算型 c8a: CPU/内存配比 1:2 或 1:4, vCPU范围 2-192
    'c8a': [
        {cpu: 2, mem: 4}, {cpu: 2, mem: 8},
        {cpu: 4, mem: 8}, {cpu: 4, mem: 16},
        {cpu: 8, mem: 16}, {cpu: 8, mem: 32},
        {cpu: 12, mem: 24}, {cpu: 12, mem: 48},
        {cpu: 16, mem: 32}, {cpu: 16, mem: 64},
        {cpu: 24, mem: 48}, {cpu: 24, mem: 96},
        {cpu: 32, mem: 64}, {cpu: 32, mem: 128},
        {cpu: 48, mem: 96}, {cpu: 48, mem: 192},
        {cpu: 64, mem: 128}, {cpu: 64, mem: 256},
        {cpu: 96, mem: 192}, {cpu: 96, mem: 384},
        {cpu: 128, mem: 256}, {cpu: 128, mem: 512},
        {cpu: 192, mem: 384}, {cpu: 192, mem: 768}
    ],
    // 计算型 c8e: CPU/内存配比 1:2 或 1:4, vCPU范围 2-192
    'c8e': [
        {cpu: 2, mem: 4}, {cpu: 2, mem: 8},
        {cpu: 4, mem: 8}, {cpu: 4, mem: 16},
        {cpu: 8, mem: 16}, {cpu: 8, mem: 32},
        {cpu: 12, mem: 24}, {cpu: 12, mem: 48},
        {cpu: 16, mem: 32}, {cpu: 16, mem: 64},
        {cpu: 24, mem: 48}, {cpu: 24, mem: 96},
        {cpu: 32, mem: 64}, {cpu: 32, mem: 128},
        {cpu: 48, mem: 96}, {cpu: 48, mem: 192},
        {cpu: 64, mem: 128}, {cpu: 64, mem: 256},
        {cpu: 96, mem: 192}, {cpu: 96, mem: 384},
        {cpu: 128, mem: 256}, {cpu: 128, mem: 512},
        {cpu: 192, mem: 384}, {cpu: 192, mem: 768}
    ],
    // 计算型 c8: CPU/内存配比 1:2 或 1:4, vCPU范围 2-128
    'c8': [
        {cpu: 2, mem: 4}, {cpu: 2, mem: 8},
        {cpu: 4, mem: 8}, {cpu: 4, mem: 16},
        {cpu: 8, mem: 16}, {cpu: 8, mem: 32},
        {cpu: 12, mem: 24}, {cpu: 12, mem: 48},
        {cpu: 16, mem: 32}, {cpu: 16, mem: 64},
        {cpu: 24, mem: 48}, {cpu: 24, mem: 96},
        {cpu: 32, mem: 64}, {cpu: 32, mem: 128},
        {cpu: 48, mem: 96}, {cpu: 48, mem: 192},
        {cpu: 64, mem: 128}, {cpu: 64, mem: 256},
        {cpu: 96, mem: 192}, {cpu: 96, mem: 384},
        {cpu: 128, mem: 256}, {cpu: 128, mem: 512}
    ],
    // 计算型 c7: CPU/内存配比 1:2 或 1:4, vCPU范围 2-96
    'c7': [
        {cpu: 2, mem: 4}, {cpu: 2, mem: 8},
        {cpu: 4, mem: 8}, {cpu: 4, mem: 16},
        {cpu: 8, mem: 16}, {cpu: 8, mem: 32},
        {cpu: 12, mem: 24}, {cpu: 12, mem: 48},
        {cpu: 16, mem: 32}, {cpu: 16, mem: 64},
        {cpu: 24, mem: 48}, {cpu: 24, mem: 96},
        {cpu: 32, mem: 64}, {cpu: 32, mem: 128},
        {cpu: 48, mem: 96}, {cpu: 48, mem: 192},
        {cpu: 64, mem: 128}, {cpu: 64, mem: 256},
        {cpu: 96, mem: 192}, {cpu: 96, mem: 384}
    ],
    // 计算型 c6: CPU/内存配比 1:2 或 1:4, vCPU范围 2-64
    'c6': [
        {cpu: 2, mem: 4}, {cpu: 2, mem: 8},
        {cpu: 4, mem: 8}, {cpu: 4, mem: 16},
        {cpu: 8, mem: 16}, {cpu: 8, mem: 32},
        {cpu: 12, mem: 24}, {cpu: 12, mem: 48},
        {cpu: 16, mem: 32}, {cpu: 16, mem: 64},
        {cpu: 24, mem: 48}, {cpu: 24, mem: 96},
        {cpu: 32, mem: 64}, {cpu: 32, mem: 128},
        {cpu: 64, mem: 128}, {cpu: 64, mem: 256}
    ],
    // 计算型 c3: CPU/内存配比 1:2 或 1:4, vCPU范围 2-32
    'c3': [
        {cpu: 2, mem: 4}, {cpu: 2, mem: 8},
        {cpu: 4, mem: 8}, {cpu: 4, mem: 16},
        {cpu: 8, mem: 16}, {cpu: 8, mem: 32},
        {cpu: 16, mem: 32}, {cpu: 16, mem: 64},
        {cpu: 32, mem: 64}, {cpu: 32, mem: 128}
    ],
    // 内存型 m8a: CPU/内存配比 1:8, vCPU范围 2-128
    'm8a': [
        {cpu: 2, mem: 16},
        {cpu: 4, mem: 32},
        {cpu: 8, mem: 64},
        {cpu: 16, mem: 128},
        {cpu: 32, mem: 256},
        {cpu: 48, mem: 384},
        {cpu: 64, mem: 512},
        {cpu: 96, mem: 768},
        {cpu: 128, mem: 1024}
    ],
    // 内存型 m8e: CPU/内存配比 1:8, vCPU范围 2-192
    'm8e': [
        {cpu: 2, mem: 16},
        {cpu: 4, mem: 32},
        {cpu: 8, mem: 64},
        {cpu: 12, mem: 96},
        {cpu: 16, mem: 128},
        {cpu: 24, mem: 192},
        {cpu: 32, mem: 256},
        {cpu: 48, mem: 384},
        {cpu: 64, mem: 512},
        {cpu: 96, mem: 768},
        {cpu: 128, mem: 1024},
        {cpu: 192, mem: 1536}
    ],
    // 内存型 m8: CPU/内存配比 1:8, vCPU范围 2-128
    'm8': [
        {cpu: 2, mem: 16},
        {cpu: 4, mem: 32},
        {cpu: 8, mem: 64},
        {cpu: 12, mem: 96},
        {cpu: 16, mem: 128},
        {cpu: 24, mem: 192},
        {cpu: 32, mem: 256},
        {cpu: 48, mem: 384},
        {cpu: 64, mem: 512},
        {cpu: 96, mem: 768},
        {cpu: 128, mem: 1024}
    ],
    // 内存型 m7: CPU/内存配比 1:8, vCPU范围 2-96
    'm7': [
        {cpu: 2, mem: 16},
        {cpu: 4, mem: 32},
        {cpu: 8, mem: 64},
        {cpu: 12, mem: 96},
        {cpu: 16, mem: 128},
        {cpu: 24, mem: 192},
        {cpu: 32, mem: 256},
        {cpu: 48, mem: 384},
        {cpu: 64, mem: 512},
        {cpu: 96, mem: 768}
    ],
    // 内存型 m6: CPU/内存配比 1:8, vCPU范围 2-64
    'm6': [
        {cpu: 2, mem: 16},
        {cpu: 4, mem: 32},
        {cpu: 8, mem: 64},
        {cpu: 12, mem: 96},
        {cpu: 16, mem: 128},
        {cpu: 24, mem: 192},
        {cpu: 32, mem: 256},
        {cpu: 64, mem: 512}
    ],
    // 内存型 m3: CPU/内存配比 1:8, vCPU范围 2-32
    'm3': [
        {cpu: 2, mem: 16},
        {cpu: 4, mem: 32},
        {cpu: 8, mem: 64},
        {cpu: 16, mem: 128},
        {cpu: 32, mem: 256}
    ],
    // 内存型 m2: CPU/内存配比 1:8, vCPU范围 1-16
    'm2': [
        {cpu: 1, mem: 8},
        {cpu: 2, mem: 16},
        {cpu: 4, mem: 32},
        {cpu: 8, mem: 64},
        {cpu: 16, mem: 128}
    ],
    // 增强型 c8ne: CPU/内存配比 1:2 或 1:4, vCPU范围 2-192
    'c8ne': [
        {cpu: 2, mem: 4}, {cpu: 2, mem: 8},
        {cpu: 4, mem: 8}, {cpu: 4, mem: 16},
        {cpu: 8, mem: 16}, {cpu: 8, mem: 32},
        {cpu: 16, mem: 32}, {cpu: 16, mem: 64},
        {cpu: 32, mem: 64}, {cpu: 32, mem: 128},
        {cpu: 48, mem: 96}, {cpu: 48, mem: 192},
        {cpu: 64, mem: 128}, {cpu: 64, mem: 256},
        {cpu: 96, mem: 192}, {cpu: 96, mem: 384},
        {cpu: 128, mem: 256}, {cpu: 128, mem: 512},
        {cpu: 192, mem: 384}, {cpu: 192, mem: 768}
    ],
    // 增强型 m8ne: CPU/内存配比 1:8, vCPU范围 2-192
    'm8ne': [
        {cpu: 2, mem: 16},
        {cpu: 4, mem: 32},
        {cpu: 8, mem: 64},
        {cpu: 16, mem: 128},
        {cpu: 32, mem: 256},
        {cpu: 48, mem: 384},
        {cpu: 64, mem: 512},
        {cpu: 96, mem: 768},
        {cpu: 128, mem: 1024},
        {cpu: 192, mem: 1536}
    ],
    // 增强型 c7ne: CPU/内存配比 1:2 或 1:4, vCPU范围 2-148 (停售)
    'c7ne': [
        {cpu: 2, mem: 4}, {cpu: 2, mem: 8},
        {cpu: 4, mem: 8}, {cpu: 4, mem: 16},
        {cpu: 8, mem: 16}, {cpu: 8, mem: 32},
        {cpu: 16, mem: 32}, {cpu: 16, mem: 64},
        {cpu: 32, mem: 64}, {cpu: 32, mem: 128},
        {cpu: 64, mem: 128}, {cpu: 64, mem: 256},
        {cpu: 148, mem: 296}, {cpu: 148, mem: 592}
    ],
    // 鲲鹏通用型 ks2x: CPU/内存配比 1:1/1:2/1:4, vCPU范围 1-32
    'ks2x': [
        {cpu: 1, mem: 1}, {cpu: 1, mem: 2}, {cpu: 1, mem: 4},
        {cpu: 2, mem: 2}, {cpu: 2, mem: 4}, {cpu: 2, mem: 8},
        {cpu: 4, mem: 4}, {cpu: 4, mem: 8}, {cpu: 4, mem: 16},
        {cpu: 8, mem: 8}, {cpu: 8, mem: 16}, {cpu: 8, mem: 32},
        {cpu: 12, mem: 12}, {cpu: 12, mem: 24}, {cpu: 12, mem: 48},
        {cpu: 16, mem: 16}, {cpu: 16, mem: 32}, {cpu: 16, mem: 64},
        {cpu: 24, mem: 24}, {cpu: 24, mem: 48}, {cpu: 24, mem: 96},
        {cpu: 32, mem: 32}, {cpu: 32, mem: 64}, {cpu: 32, mem: 128}
    ],
    // 鲲鹏通用型 ks1: CPU/内存配比 1:1/1:2/1:4, vCPU范围 1-16
    'ks1': [
        {cpu: 1, mem: 1}, {cpu: 1, mem: 2}, {cpu: 1, mem: 4},
        {cpu: 2, mem: 2}, {cpu: 2, mem: 4}, {cpu: 2, mem: 8},
        {cpu: 4, mem: 4}, {cpu: 4, mem: 8}, {cpu: 4, mem: 16},
        {cpu: 8, mem: 8}, {cpu: 8, mem: 16}, {cpu: 8, mem: 32},
        {cpu: 16, mem: 16}, {cpu: 16, mem: 32}, {cpu: 16, mem: 64}
    ],
    // 鲲鹏计算型 kc2x: CPU/内存配比 1:2/1:4, vCPU范围 2-64
    'kc2x': [
        {cpu: 2, mem: 4}, {cpu: 2, mem: 8},
        {cpu: 4, mem: 8}, {cpu: 4, mem: 16},
        {cpu: 8, mem: 16}, {cpu: 8, mem: 32},
        {cpu: 12, mem: 24}, {cpu: 12, mem: 48},
        {cpu: 16, mem: 32}, {cpu: 16, mem: 64},
        {cpu: 24, mem: 48}, {cpu: 24, mem: 96},
        {cpu: 32, mem: 64}, {cpu: 32, mem: 128},
        {cpu: 48, mem: 96}, {cpu: 48, mem: 192},
        {cpu: 64, mem: 128}, {cpu: 64, mem: 256}
    ],
    // 鲲鹏计算型 kc1: CPU/内存配比 1:2/1:4, vCPU范围 2-32
    'kc1': [
        {cpu: 2, mem: 4}, {cpu: 2, mem: 8},
        {cpu: 4, mem: 8}, {cpu: 4, mem: 16},
        {cpu: 8, mem: 16}, {cpu: 8, mem: 32},
        {cpu: 16, mem: 32}, {cpu: 16, mem: 64},
        {cpu: 32, mem: 64}, {cpu: 32, mem: 128}
    ],
    // 鲲鹏内存型 km2x: CPU/内存配比 1:8, vCPU范围 2-64
    'km2x': [
        {cpu: 2, mem: 16},
        {cpu: 4, mem: 32},
        {cpu: 8, mem: 64},
        {cpu: 12, mem: 96},
        {cpu: 16, mem: 128},
        {cpu: 24, mem: 192},
        {cpu: 32, mem: 256},
        {cpu: 48, mem: 384},
        {cpu: 64, mem: 512}
    ],
    // 鲲鹏内存型 km1: CPU/内存配比 1:8, vCPU范围 2-32
    'km1': [
        {cpu: 2, mem: 16},
        {cpu: 4, mem: 32},
        {cpu: 8, mem: 64},
        {cpu: 16, mem: 128},
        {cpu: 32, mem: 256}
    ],
    // 鲲鹏网络增强通用型 ks2xne: CPU/内存配比 1:1/1:2/1:4, vCPU范围 1-32
    'ks2xne': [
        {cpu: 1, mem: 1}, {cpu: 1, mem: 2}, {cpu: 1, mem: 4},
        {cpu: 2, mem: 2}, {cpu: 2, mem: 4}, {cpu: 2, mem: 8},
        {cpu: 4, mem: 4}, {cpu: 4, mem: 8}, {cpu: 4, mem: 16},
        {cpu: 8, mem: 8}, {cpu: 8, mem: 16}, {cpu: 8, mem: 32},
        {cpu: 12, mem: 12}, {cpu: 12, mem: 24}, {cpu: 12, mem: 48},
        {cpu: 16, mem: 16}, {cpu: 16, mem: 32}, {cpu: 16, mem: 64},
        {cpu: 24, mem: 24}, {cpu: 24, mem: 48}, {cpu: 24, mem: 96},
        {cpu: 32, mem: 32}, {cpu: 32, mem: 64}, {cpu: 32, mem: 128}
    ],
    // 鲲鹏网络增强计算型 kc2xne: CPU/内存配比 1:2/1:4, vCPU范围 2-192
    'kc2xne': [
        {cpu: 2, mem: 4}, {cpu: 2, mem: 8},
        {cpu: 4, mem: 8}, {cpu: 4, mem: 16},
        {cpu: 8, mem: 16}, {cpu: 8, mem: 32},
        {cpu: 12, mem: 24}, {cpu: 12, mem: 48},
        {cpu: 16, mem: 32}, {cpu: 16, mem: 64},
        {cpu: 24, mem: 48}, {cpu: 24, mem: 96},
        {cpu: 32, mem: 64}, {cpu: 32, mem: 128},
        {cpu: 48, mem: 96}, {cpu: 48, mem: 192},
        {cpu: 64, mem: 128}, {cpu: 64, mem: 256},
        {cpu: 96, mem: 192}, {cpu: 96, mem: 384},
        {cpu: 128, mem: 256}, {cpu: 128, mem: 512},
        {cpu: 192, mem: 384}, {cpu: 192, mem: 768}
    ],
    // 鲲鹏网络增强内存型 km2xne: CPU/内存配比 1:8, vCPU范围 2-96
    'km2xne': [
        {cpu: 2, mem: 16},
        {cpu: 4, mem: 32},
        {cpu: 8, mem: 64},
        {cpu: 12, mem: 96},
        {cpu: 16, mem: 128},
        {cpu: 24, mem: 192},
        {cpu: 32, mem: 256},
        {cpu: 48, mem: 384},
        {cpu: 64, mem: 512},
        {cpu: 96, mem: 768}
    ],
    // 海光通用型 hs3x: CPU/内存配比 1:1/1:2/1:4, vCPU范围 1-32
    'hs3x': [
        {cpu: 1, mem: 1}, {cpu: 1, mem: 2}, {cpu: 1, mem: 4},
        {cpu: 2, mem: 2}, {cpu: 2, mem: 4}, {cpu: 2, mem: 8},
        {cpu: 4, mem: 4}, {cpu: 4, mem: 8}, {cpu: 4, mem: 16},
        {cpu: 8, mem: 8}, {cpu: 8, mem: 16}, {cpu: 8, mem: 32},
        {cpu: 16, mem: 16}, {cpu: 16, mem: 32}, {cpu: 16, mem: 64},
        {cpu: 32, mem: 32}, {cpu: 32, mem: 64}, {cpu: 32, mem: 128}
    ],
    // 海光通用型 hs1: CPU/内存配比 1:1/1:2/1:4, vCPU范围 1-16
    'hs1': [
        {cpu: 1, mem: 1}, {cpu: 1, mem: 2}, {cpu: 1, mem: 4},
        {cpu: 2, mem: 2}, {cpu: 2, mem: 4}, {cpu: 2, mem: 8},
        {cpu: 4, mem: 4}, {cpu: 4, mem: 8}, {cpu: 4, mem: 16},
        {cpu: 8, mem: 8}, {cpu: 8, mem: 16}, {cpu: 8, mem: 32},
        {cpu: 16, mem: 16}, {cpu: 16, mem: 32}, {cpu: 16, mem: 64}
    ],
    // 海光计算型 hc3x: CPU/内存配比 1:2/1:4, vCPU范围 2-128
    'hc3x': [
        {cpu: 2, mem: 4}, {cpu: 2, mem: 8},
        {cpu: 4, mem: 8}, {cpu: 4, mem: 16},
        {cpu: 8, mem: 16}, {cpu: 8, mem: 32},
        {cpu: 16, mem: 32}, {cpu: 16, mem: 64},
        {cpu: 32, mem: 64}, {cpu: 32, mem: 128},
        {cpu: 64, mem: 128}, {cpu: 64, mem: 256},
        {cpu: 128, mem: 256}, {cpu: 128, mem: 512}
    ],
    // 海光计算型 hc1: CPU/内存配比 1:2/1:4, vCPU范围 2-32
    'hc1': [
        {cpu: 2, mem: 4}, {cpu: 2, mem: 8},
        {cpu: 4, mem: 8}, {cpu: 4, mem: 16},
        {cpu: 8, mem: 16}, {cpu: 8, mem: 32},
        {cpu: 16, mem: 32}, {cpu: 16, mem: 64},
        {cpu: 32, mem: 64}, {cpu: 32, mem: 128}
    ],
    // 海光内存型 hm3x: CPU/内存配比 1:8, vCPU范围 2-64
    'hm3x': [
        {cpu: 2, mem: 16},
        {cpu: 4, mem: 32},
        {cpu: 8, mem: 64},
        {cpu: 16, mem: 128},
        {cpu: 32, mem: 256},
        {cpu: 64, mem: 512}
    ],
    // 海光内存型 hm1: CPU/内存配比 1:8, vCPU范围 2-16
    'hm1': [
        {cpu: 2, mem: 16},
        {cpu: 4, mem: 32},
        {cpu: 8, mem: 64},
        {cpu: 16, mem: 128}
    ],
    // 海光网络增强通用型 hs3xne: CPU/内存配比 1:1/1:2/1:4, vCPU范围 1-32
    'hs3xne': [
        {cpu: 1, mem: 1}, {cpu: 1, mem: 2}, {cpu: 1, mem: 4},
        {cpu: 2, mem: 2}, {cpu: 2, mem: 4}, {cpu: 2, mem: 8},
        {cpu: 4, mem: 4}, {cpu: 4, mem: 8}, {cpu: 4, mem: 16},
        {cpu: 8, mem: 8}, {cpu: 8, mem: 16}, {cpu: 8, mem: 32},
        {cpu: 12, mem: 12}, {cpu: 12, mem: 24}, {cpu: 12, mem: 48},
        {cpu: 16, mem: 16}, {cpu: 16, mem: 32}, {cpu: 16, mem: 64},
        {cpu: 24, mem: 24}, {cpu: 24, mem: 48}, {cpu: 24, mem: 96},
        {cpu: 32, mem: 32}, {cpu: 32, mem: 64}, {cpu: 32, mem: 128}
    ],
    // 海光网络增强计算型 hc3xne: CPU/内存配比 1:2/1:4, vCPU范围 2-192
    'hc3xne': [
        {cpu: 2, mem: 4}, {cpu: 2, mem: 8},
        {cpu: 4, mem: 8}, {cpu: 4, mem: 16},
        {cpu: 8, mem: 16}, {cpu: 8, mem: 32},
        {cpu: 12, mem: 24}, {cpu: 12, mem: 48},
        {cpu: 16, mem: 32}, {cpu: 16, mem: 64},
        {cpu: 24, mem: 48}, {cpu: 24, mem: 96},
        {cpu: 32, mem: 64}, {cpu: 32, mem: 128},
        {cpu: 48, mem: 96}, {cpu: 48, mem: 192},
        {cpu: 64, mem: 128}, {cpu: 64, mem: 256},
        {cpu: 96, mem: 192}, {cpu: 96, mem: 384},
        {cpu: 128, mem: 256}, {cpu: 128, mem: 512},
        {cpu: 192, mem: 384}, {cpu: 192, mem: 768}
    ],
    // 海光网络增强内存型 hm3xne: CPU/内存配比 1:8, vCPU范围 2-96
    'hm3xne': [
        {cpu: 2, mem: 16},
        {cpu: 4, mem: 32},
        {cpu: 8, mem: 64},
        {cpu: 12, mem: 96},
        {cpu: 16, mem: 128},
        {cpu: 24, mem: 192},
        {cpu: 32, mem: 256},
        {cpu: 48, mem: 384},
        {cpu: 64, mem: 512},
        {cpu: 96, mem: 768}
    ],
    // 海光安全增强计算型 hc4t: CPU/内存配比 1:2/1:4, vCPU范围 2-128
    'hc4t': [
        {cpu: 2, mem: 4}, {cpu: 2, mem: 8},
        {cpu: 4, mem: 8}, {cpu: 4, mem: 16},
        {cpu: 8, mem: 16}, {cpu: 8, mem: 32},
        {cpu: 16, mem: 32}, {cpu: 16, mem: 64},
        {cpu: 32, mem: 64}, {cpu: 32, mem: 128},
        {cpu: 64, mem: 128}, {cpu: 64, mem: 256},
        {cpu: 128, mem: 256}, {cpu: 128, mem: 512}
    ],
    // 海光安全增强内存型 hm4t: CPU/内存配比 1:8, vCPU范围 2-64
    'hm4t': [
        {cpu: 2, mem: 16},
        {cpu: 4, mem: 32},
        {cpu: 8, mem: 64},
        {cpu: 16, mem: 128},
        {cpu: 32, mem: 256},
        {cpu: 64, mem: 512}
    ],
    // 飞腾通用型 fs1: CPU/内存配比 1:1/1:2/1:4, vCPU范围 1-16
    'fs1': [
        {cpu: 1, mem: 1}, {cpu: 1, mem: 2}, {cpu: 1, mem: 4},
        {cpu: 2, mem: 2}, {cpu: 2, mem: 4}, {cpu: 2, mem: 8},
        {cpu: 4, mem: 4}, {cpu: 4, mem: 8}, {cpu: 4, mem: 16},
        {cpu: 8, mem: 8}, {cpu: 8, mem: 16}, {cpu: 8, mem: 32},
        {cpu: 16, mem: 16}, {cpu: 16, mem: 32}, {cpu: 16, mem: 64}
    ],
    // 飞腾计算型 fc1: CPU/内存配比 1:2/1:4, vCPU范围 2-16
    'fc1': [
        {cpu: 2, mem: 4}, {cpu: 2, mem: 8},
        {cpu: 4, mem: 8}, {cpu: 4, mem: 16},
        {cpu: 8, mem: 16}, {cpu: 8, mem: 32},
        {cpu: 16, mem: 32}, {cpu: 16, mem: 64}
    ],
    // 飞腾内存型 fm1: CPU/内存配比 1:8, vCPU范围 2-16
    'fm1': [
        {cpu: 2, mem: 16},
        {cpu: 4, mem: 32},
        {cpu: 8, mem: 64},
        {cpu: 16, mem: 128}
    ],
    // 经济型 e: CPU/内存配比 1:1/1:2/1:4, vCPU范围 2-8
    'e': [
        {cpu: 2, mem: 2}, {cpu: 2, mem: 4}, {cpu: 2, mem: 8},
        {cpu: 4, mem: 8}, {cpu: 4, mem: 16},
        {cpu: 8, mem: 16}, {cpu: 8, mem: 32}
    ]
};

// 获取规格支持的CPU列表
function getSupportedCpus(specType) {
    const configs = specConfigs[specType];
    if (!configs) return [];
    const cpus = [...new Set(configs.map(c => c.cpu))].sort((a, b) => a - b);
    return cpus;
}

// 获取规格在指定CPU下支持的内存列表
function getSupportedMems(specType, cpu) {
    const configs = specConfigs[specType];
    if (!configs) return [];
    const mems = configs.filter(c => c.cpu === cpu).map(c => c.mem).sort((a, b) => a - b);
    return mems;
}

// 检查CPU和内存组合是否有效
function isValidConfig(specType, cpu, mem) {
    const configs = specConfigs[specType];
    if (!configs) return true; // 如果没有配置表，允许任意组合
    return configs.some(c => c.cpu === cpu && c.mem === mem);
}

// 云硬盘价格配置 (包月价格: 元/G/月)
const diskPricing = {
    'sata': { price: 0.3, name: '普通IO (SATA)', discount: [0.85, 0.7, 0.5, 0.45, 0.4] },
    'sas': { price: 0.4, name: '高IO (SAS)', discount: [0.85, 0.7, 0.5, 0.45, 0.4] },
    'ssd': { price: 0.7, name: '通用型SSD', discount: [0.85, 0.7, 0.6, 0.6, 0.6] },
    'ssd-high': { price: 1.2, name: '超高IO (SSD)', discount: [0.85, 0.7, 0.6, 0.6, 0.6] },
    'ssd-extreme': { price: 2, name: '极速型SSD', discount: [0.85, 0.7, 0.5, 0.45, 0.4] },
    'xssd-0': { price: 0.5, name: 'XSSD-0', discount: [0.85, 0.7, 0.6, 0.6, 0.6] },
    'xssd-1': { price: 1, name: 'XSSD-1', discount: [0.85, 0.7, 0.6, 0.6, 0.6] },
    'xssd-2': { price: 2, name: 'XSSD-2', discount: [0.85, 0.7, 0.6, 0.6, 0.6] },
    'xssd-3': { price: 4, name: 'XSSD-3', discount: [0.85, 0.7, 0.6, 0.6, 0.6] }
};

// 弹性IP价格配置 (官方定价: 包月价格 元/Mbps/月)
const eipPricing = {
    // 0-5M: 20元/M/月, 5M以上: 36元/M/月
    // 包年折扣: 1年8.5折、2年7折、3年5折
    basePriceFirst5: 20,   // 0-5M部分 单价
    basePriceAbove5: 36,    // 5M以上部分 单价
    discount: [0.85, 0.7, 0.5, 0.5, 0.5]  // 1-5年折扣 (4-5年延续3年折扣)
};

// 弹性IP价格计算函数
function calculateEipMonthlyPrice(bandwidth) {
    if (bandwidth <= 0) return 0;
    if (bandwidth <= 5) {
        return eipPricing.basePriceFirst5 * bandwidth;
    } else {
        // 0-5M部分: 5 * 20 = 100
        // 5M以上部分: (bandwidth - 5) * 36
        return 5 * eipPricing.basePriceFirst5 + (bandwidth - 5) * eipPricing.basePriceAbove5;
    }
}

let currentResult = null;
let compareList = [];

// 计算GPU价格
function calculateGpuPrice() {
    const gpuFullSpec = document.getElementById('gpuSpec').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    const specGroup = document.getElementById('specType').value;
    
    // 使用新的getSelectedGpuConfig获取当前选中的配置
    const gpuInfo = getSelectedGpuConfig();
    if (!gpuInfo) {
        alert('请选择GPU规格');
        return;
    }
    
    const specName = gpuSpecNames[gpuFullSpec] || gpuFullSpec;
    
    // 硬盘配置
    const systemDiskType = document.getElementById('systemDiskType').value;
    const systemDiskSize = parseInt(document.getElementById('systemDiskSize').value);
    const dataDiskType = document.getElementById('dataDiskType').value;
    const dataDiskSize = parseInt(document.getElementById('dataDiskSize').value);
    const dataDiskCount = parseInt(document.getElementById('dataDiskCount').value);
    
    // 弹性IP配置
    const eipEnabled = document.getElementById('eipEnabled').value;
    const eipBandwidth = parseInt(document.getElementById('eipBandwidth').value);
    
    // GPU云主机 包年折扣 (官方: 1年8.5折、2年7折、3年5折)
    const gpuDiscounts = [0.85, 0.7, 0.5, 0.5, 0.5];
    
    // GPU单价
    const unitMonthlyPrice = gpuInfo.monthly;
    
    // 云硬盘价格
    const systemDiskPricing = diskPricing[systemDiskType];
    const dataDiskPricing = dataDiskType !== 'none' ? diskPricing[dataDiskType] : null;
    const systemDiskMonthly = systemDiskPricing ? systemDiskPricing.price * systemDiskSize : 0;
    const dataDiskMonthly = (dataDiskType !== 'none' && dataDiskCount > 0 && dataDiskPricing) ? dataDiskPricing.price * dataDiskSize * dataDiskCount : 0;
    const diskMonthlyPrice = systemDiskMonthly + dataDiskMonthly;
    
    // 弹性IP月价
    const eipMonthly = eipEnabled === 'yes' ? calculateEipMonthlyPrice(eipBandwidth) : 0;
    
    // 月单价(含硬盘+弹性IP)
    const totalUnitPrice = unitMonthlyPrice + diskMonthlyPrice + eipMonthly;
    
    // 硬盘配置描述
    let diskConfig = '';
    if (systemDiskSize > 0) {
        diskConfig = `系统盘: ${diskPricing[systemDiskType]?.name || systemDiskType} ${systemDiskSize}GB`;
    }
    if (dataDiskType !== 'none' && dataDiskCount > 0) {
        diskConfig += (diskConfig ? ', ' : '') + `数据盘: ${diskPricing[dataDiskType]?.name || dataDiskType} ${dataDiskSize}GB × ${dataDiskCount}`;
    }
    if (!diskConfig) diskConfig = '无硬盘配置';
    
    // 弹性IP配置描述
    let eipConfig = '';
    if (eipEnabled === 'yes') {
        eipConfig = `弹性IP: ${eipBandwidth}Mbps`;
    }
    if (!eipConfig) eipConfig = '无弹性IP';
    
    // 计算1-5年价格
    const yearPrices = [];
    for (let year = 1; year <= 5; year++) {
        const yearIndex = year - 1;
        // GPU年价
        const gpuYearOriginal = unitMonthlyPrice * 12 * year * quantity;
        const gpuYearDiscount = gpuYearOriginal * gpuDiscounts[yearIndex];
        // 云硬盘年价（使用硬盘折扣）
        const diskDiscounts = systemDiskPricing ? systemDiskPricing.discount : [1, 1, 1, 1, 1];
        const diskYearOriginal = diskMonthlyPrice * 12 * year * quantity;
        const diskYearDiscount = diskMonthlyPrice * diskDiscounts[yearIndex] * 12 * year * quantity;
        // 弹性IP年价
        const eipDiscounts = eipPricing.discount;
        const eipYearOriginal = eipMonthly * 12 * year * quantity;
        const eipYearDiscount = eipMonthly * eipDiscounts[yearIndex] * 12 * year * quantity;
        // 总价
        yearPrices.push({
            original: (gpuYearOriginal + diskYearOriginal + eipYearOriginal).toFixed(2),
            discounted: (gpuYearDiscount + diskYearDiscount + eipYearDiscount).toFixed(2)
        });
    }
    
    currentResult = {
        specType: gpuFullSpec,
        specTypeName: specName,
        cpuCores: gpuInfo.vcpu,
        memorySize: gpuInfo.mem,
        quantity: quantity,
        unitPrice: totalUnitPrice.toFixed(2),
        totalPrice: yearPrices[0].discounted,
        // GPU信息
        gpuCount: gpuInfo.gpuCount,
        gpuModel: gpuInfo.gpuModel,
        vram: gpuInfo.vram,
        // 年份价格
        year1Original: yearPrices[0].original,
        year1Discount: yearPrices[0].discounted,
        year2Discount: yearPrices[1].discounted,
        year3Discount: yearPrices[2].discounted,
        year4Discount: yearPrices[3].discounted,
        year5Discount: yearPrices[4].discounted,
        // 显示信息
        diskConfig: diskConfig,
        eipConfig: eipConfig
    };
    
    // 显示结果
    document.getElementById('resultPanel').style.display = 'block';
    document.getElementById('resultSpec').textContent = currentResult.specTypeName + ' [' + gpuInfo.gpuModel + ' × ' + gpuInfo.gpuCount + ']';
    document.getElementById('resultConfig').textContent = gpuInfo.vcpu + '核 ' + gpuInfo.mem + 'G内存 ' + gpuInfo.vram + 'GB显存';
    document.getElementById('resultUnitPrice').textContent = parseFloat(currentResult.unitPrice).toLocaleString('zh-CN', {minimumFractionDigits: 2});
    document.getElementById('resultYear1Original').textContent = parseFloat(currentResult.year1Original).toLocaleString('zh-CN', {minimumFractionDigits: 2});
    document.getElementById('resultYear1Discount').textContent = parseFloat(currentResult.year1Discount).toLocaleString('zh-CN', {minimumFractionDigits: 2});
    document.getElementById('resultYear2Discount').textContent = parseFloat(currentResult.year2Discount).toLocaleString('zh-CN', {minimumFractionDigits: 2});
    document.getElementById('resultYear3Discount').textContent = parseFloat(currentResult.year3Discount).toLocaleString('zh-CN', {minimumFractionDigits: 2});
    document.getElementById('resultYear4Discount').textContent = parseFloat(currentResult.year4Discount).toLocaleString('zh-CN', {minimumFractionDigits: 2});
    document.getElementById('resultYear5Discount').textContent = parseFloat(currentResult.year5Discount).toLocaleString('zh-CN', {minimumFractionDigits: 2});
}

// 计算价格
function calculatePrice() {
    const category = document.getElementById('specCategory').value;
    const specType = document.getElementById('specType').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    
    // GPU规格特殊处理
    if (category === 'gpu') {
        calculateGpuPrice();
        return;
    }
    
    const cpuCores = parseInt(document.getElementById('cpuCores').value);
    const memorySize = parseInt(document.getElementById('memorySize').value);
    
    // 硬盘配置
    const systemDiskType = document.getElementById('systemDiskType').value;
    const systemDiskSize = parseInt(document.getElementById('systemDiskSize').value);
    const dataDiskType = document.getElementById('dataDiskType').value;
    const dataDiskSize = parseInt(document.getElementById('dataDiskSize').value);
    const dataDiskCount = parseInt(document.getElementById('dataDiskCount').value);
    
    // 弹性IP配置
    const eipEnabled = document.getElementById('eipEnabled').value;
    const eipBandwidth = parseInt(document.getElementById('eipBandwidth').value);
    
    const pricing = pricingData[specType];
    if (!pricing) {
        alert('未找到该规格的价格配置');
        return;
    }
    
    // 硬盘价格配置
    const systemDiskPricing = diskPricing[systemDiskType];
    const dataDiskPricing = dataDiskType !== 'none' ? diskPricing[dataDiskType] : null;
    
    // 弹性IP月价 (官方定价: 0-5M=20元/M/月, 5M以上=36元/M/月)
    const eipMonthly = eipEnabled === 'yes' ? calculateEipMonthlyPrice(eipBandwidth) : 0;
    
    // 计算标准月价 - 云主机 + 硬盘 + 弹性IP
    const cpuPrice = pricing.cpuMonthly * cpuCores;
    const memPrice = pricing.memMonthly * memorySize;
    const ecsMonthlyPrice = cpuPrice + memPrice;
    
    // 云硬盘月价
    const systemDiskMonthly = systemDiskPricing ? systemDiskPricing.price * systemDiskSize : 0;
    const dataDiskMonthly = (dataDiskType !== 'none' && dataDiskCount > 0 && dataDiskPricing) ? dataDiskPricing.price * dataDiskSize * dataDiskCount : 0;
    const diskMonthlyPrice = systemDiskMonthly + dataDiskMonthly;
    
    // 月单价(含硬盘+弹性IP)
    const unitPrice = ecsMonthlyPrice + diskMonthlyPrice + eipMonthly;
    
    // 云主机折扣策略
    const ecsDiscounts = pricing.discount;
    const systemDiskDiscounts = systemDiskPricing ? systemDiskPricing.discount : [1, 1, 1, 1, 1];
    const dataDiskDiscounts = dataDiskPricing ? dataDiskPricing.discount : [1, 1, 1, 1, 1];
    const eipDiscounts = eipPricing.discount; // 官方折扣: 1年8.5折、2年7折、3年5折
    
    // 计算1-5年折扣价
    const yearPrices = [];
    for (let year = 1; year <= 5; year++) {
        const yearIndex = year - 1;
        
        // 云主机年价
        const ecsYearOriginal = ecsMonthlyPrice * 12 * year * quantity;
        const ecsYearDiscount = ecsMonthlyPrice * ecsDiscounts[yearIndex] * 12 * year * quantity;
        
        // 云硬盘年价
        const diskYearOriginal = diskMonthlyPrice * 12 * year * quantity;
        const diskYearDiscount = diskMonthlyPrice * systemDiskDiscounts[yearIndex] * 12 * year * quantity * (dataDiskCount > 0 ? dataDiskCount : 1);
        
        // 弹性IP年价
        const eipYearOriginal = eipMonthly * 12 * year * quantity;
        const eipYearDiscount = eipMonthly * eipDiscounts[yearIndex] * 12 * year * quantity;
        
        // 总价
        yearPrices.push({
            original: (ecsYearOriginal + diskYearOriginal + eipYearOriginal).toFixed(2),
            discounted: (ecsYearDiscount + diskYearDiscount + eipYearDiscount).toFixed(2)
        });
    }
    
    // 硬盘配置描述
    let diskConfig = '';
    if (systemDiskSize > 0) {
        diskConfig = `系统盘: ${diskPricing[systemDiskType]?.name || systemDiskType} ${systemDiskSize}GB`;
    }
    if (dataDiskType !== 'none' && dataDiskCount > 0) {
        diskConfig += (diskConfig ? ', ' : '') + `数据盘: ${diskPricing[dataDiskType]?.name || dataDiskType} ${dataDiskSize}GB × ${dataDiskCount}`;
    }
    
    // 弹性IP配置描述
    let eipConfig = '';
    if (eipEnabled === 'yes') {
        eipConfig = `弹性IP: ${eipBandwidth}Mbps`;
    }
    
    // 默认显示1年价格
    const currentTotalPrice = yearPrices[0]?.discounted || '0';
    
    currentResult = {
        specType,
        specTypeName: specTypeNames[specType],
        cpuCores,
        memorySize,
        quantity,
        unitPrice: unitPrice.toFixed(2),
        totalPrice: currentTotalPrice,
        // 年份价格
        year1Original: yearPrices[0].original,
        year1Discount: yearPrices[0].discounted,
        year2Discount: yearPrices[1].discounted,
        year3Discount: yearPrices[2].discounted,
        year4Discount: yearPrices[3].discounted,
        year5Discount: yearPrices[4].discounted,
        // 硬盘信息
        systemDiskType,
        systemDiskSize,
        systemDiskTypeName: diskPricing[systemDiskType]?.name || systemDiskType,
        dataDiskType,
        dataDiskSize,
        dataDiskCount,
        dataDiskTypeName: dataDiskType !== 'none' ? (diskPricing[dataDiskType]?.name || dataDiskType) : '无',
        diskConfig: diskConfig || '无硬盘配置',
        // 弹性IP信息
        eipEnabled,
        eipBandwidth,
        eipConfig: eipConfig || '无弹性IP'
    };
    
    // 显示结果
    document.getElementById('resultPanel').style.display = 'block';
    document.getElementById('resultSpec').textContent = currentResult.specTypeName;
    document.getElementById('resultConfig').textContent = cpuCores + '核' + memorySize + 'G';
    document.getElementById('resultUnitPrice').textContent = parseFloat(currentResult.unitPrice).toLocaleString('zh-CN', {minimumFractionDigits: 2});
    document.getElementById('resultYear1Original').textContent = parseFloat(currentResult.year1Original).toLocaleString('zh-CN', {minimumFractionDigits: 2});
    document.getElementById('resultYear1Discount').textContent = parseFloat(currentResult.year1Discount).toLocaleString('zh-CN', {minimumFractionDigits: 2});
    document.getElementById('resultYear2Discount').textContent = parseFloat(currentResult.year2Discount).toLocaleString('zh-CN', {minimumFractionDigits: 2});
    document.getElementById('resultYear3Discount').textContent = parseFloat(currentResult.year3Discount).toLocaleString('zh-CN', {minimumFractionDigits: 2});
    document.getElementById('resultYear4Discount').textContent = parseFloat(currentResult.year4Discount).toLocaleString('zh-CN', {minimumFractionDigits: 2});
    document.getElementById('resultYear5Discount').textContent = parseFloat(currentResult.year5Discount).toLocaleString('zh-CN', {minimumFractionDigits: 2});
}

// 添加到表格
function addToCompare() {
    // 保存当前的 currentResult，用于检测 calculatePrice 是否成功
    const prevResult = currentResult;
    
    // 先计算价格，确保数据是最新的
    calculatePrice();
    
    // 检查 currentResult 是否有效（calculatePrice 可能失败）
    // 如果 currentResult 为 null 或者与之前相同，说明计算失败
    if (!currentResult) {
        console.warn('[addToCompare] currentResult 为空，添加失败');
        return;
    }
    
    // 检查 currentResult 是否包含必要的字段
    if (!currentResult.specType || !currentResult.specTypeName) {
        console.warn('[addToCompare] currentResult 缺少必要字段:', currentResult);
        alert('配置数据不完整，请重新选择规格');
        return;
    }
    
    compareList.push({...currentResult, id: Date.now()});
    renderCompareList();
    
    // 隐藏结果面板，直接在表格中显示
    document.getElementById('resultPanel').style.display = 'none';
}

// 渲染对比列表
function renderCompareList() {
    const tableDiv = document.getElementById('compareTable');
    const listDiv = document.getElementById('compareList');
    const tbody = document.getElementById('tableBody');
    const tfoot = document.getElementById('tableFoot');
    
    if (compareList.length === 0) {
        tableDiv.style.display = 'none';
        listDiv.innerHTML = '<p style="color: #999; text-align: center; padding: 40px;">暂无配置，请添加配置进行对比</p>';
        tfoot.innerHTML = '';
        return;
    }
    
    tableDiv.style.display = 'block';
    listDiv.style.display = 'none';
    
    tbody.innerHTML = '';
    
    // 初始化合计
    let totalUnitPrice = 0;
    let totalMonthTotal = 0;
    let totalYear1Original = 0;
    let totalYear1Discount = 0;
    let totalYear2Discount = 0;
    let totalYear3Discount = 0;
    let totalYear4Discount = 0;
    let totalYear5Discount = 0;
    
    const billingModeText = {
        'monthly': '包月',
        'yearly': '包年',
        'ondemand': '按需'
    };
    
    compareList.forEach((item, index) => {
        const monthTotal = parseFloat(item.unitPrice) * item.quantity;
        // GPU规格显示显卡信息
        const gpuDisplay = item.gpuModel ? `${item.gpuModel} × ${item.gpuCount} (${item.vram}GB显存)` : '-';
        const diskDisplay = item.diskConfig || '-';
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.specTypeName}</td>
            <td>${item.cpuCores} 核</td>
            <td>${item.memorySize} GB</td>
            <td>${item.quantity}</td>
            <td style="font-size: 0.85rem;">${gpuDisplay}</td>
            <td style="font-size: 0.85rem;">${diskDisplay}</td>
            <td style="font-size: 0.85rem;">${item.eipConfig || '-'}</td>
            <td class="price-highlight">${parseFloat(item.unitPrice).toLocaleString('zh-CN', {minimumFractionDigits: 2})}</td>
            <td class="price-highlight">${monthTotal.toLocaleString('zh-CN', {minimumFractionDigits: 2})}</td>
            <td>${parseFloat(item.year1Original).toLocaleString('zh-CN', {minimumFractionDigits: 2})}</td>
            <td class="discount-highlight">${parseFloat(item.year1Discount).toLocaleString('zh-CN', {minimumFractionDigits: 2})}</td>
            <td class="discount-highlight">${parseFloat(item.year2Discount).toLocaleString('zh-CN', {minimumFractionDigits: 2})}</td>
            <td class="discount-highlight">${parseFloat(item.year3Discount).toLocaleString('zh-CN', {minimumFractionDigits: 2})}</td>
            <td class="discount-highlight">${parseFloat(item.year4Discount).toLocaleString('zh-CN', {minimumFractionDigits: 2})}</td>
            <td class="discount-highlight">${parseFloat(item.year5Discount).toLocaleString('zh-CN', {minimumFractionDigits: 2})}</td>
            <td><button class="btn btn-warning" style="padding: 6px 12px; font-size: 0.85rem;" onclick="removeItem(${index})">删除</button></td>
        `;
        tbody.appendChild(row);
        
        // 累加合计
        totalUnitPrice += parseFloat(item.unitPrice);
        totalMonthTotal += monthTotal;
        totalYear1Original += parseFloat(item.year1Original) * item.quantity;
        totalYear1Discount += parseFloat(item.year1Discount) * item.quantity;
        totalYear2Discount += parseFloat(item.year2Discount) * item.quantity;
        totalYear3Discount += parseFloat(item.year3Discount) * item.quantity;
        totalYear4Discount += parseFloat(item.year4Discount) * item.quantity;
        totalYear5Discount += parseFloat(item.year5Discount) * item.quantity;
    });
    
    // 显示合计行
    tfoot.innerHTML = `
        <tr style="background: #e8f4e8; font-weight: bold;">
            <td colspan="8" style="text-align: right; padding-right: 10px; font-size: 0.95rem;">📊 合计总价</td>
            <td class="price-highlight">${totalUnitPrice.toLocaleString('zh-CN', {minimumFractionDigits: 2})} 元</td>
            <td class="price-highlight">${totalMonthTotal.toLocaleString('zh-CN', {minimumFractionDigits: 2})} 元</td>
            <td>${totalYear1Original.toLocaleString('zh-CN', {minimumFractionDigits: 2})} 元</td>
            <td class="discount-highlight">${totalYear1Discount.toLocaleString('zh-CN', {minimumFractionDigits: 2})} 元</td>
            <td class="discount-highlight">${totalYear2Discount.toLocaleString('zh-CN', {minimumFractionDigits: 2})} 元</td>
            <td class="discount-highlight">${totalYear3Discount.toLocaleString('zh-CN', {minimumFractionDigits: 2})} 元</td>
            <td class="discount-highlight">${totalYear4Discount.toLocaleString('zh-CN', {minimumFractionDigits: 2})} 元</td>
            <td class="discount-highlight">${totalYear5Discount.toLocaleString('zh-CN', {minimumFractionDigits: 2})} 元</td>
            <td></td>
        </tr>
    `;
}

// 删除项目
function removeItem(index) {
    compareList.splice(index, 1);
    renderCompareList();
}

// 清空全部
function clearAll() {
    compareList = [];
    currentResult = null;
    document.getElementById('resultPanel').style.display = 'none';
    renderCompareList();
}

// 导出Excel
function exportToExcel() {
    if (compareList.length === 0) {
        alert('请先添加配置');
        return;
    }
    
    const billingModeText = { 'monthly': '包月', 'yearly': '包年', 'ondemand': '按需' };
    
    const data = compareList.map((item, index) => {
        // GPU规格显示显卡信息
        const gpuDisplay = item.gpuModel ? `${item.gpuModel} × ${item.gpuCount} (${item.vram}GB显存)` : '-';
        const diskDisplay = item.diskConfig || '-';
        return {
            '序号': index + 1,
            '规格类型': item.specTypeName,
            'CPU核数': item.cpuCores,
            '内存(GB)': item.memorySize,
            '数量': item.quantity,
            '显卡配置': gpuDisplay,
            '存储配置': diskDisplay,
            '弹性IP': item.eipConfig || '-',
            '月单价(元)': parseFloat(item.unitPrice),
            '月总价(元)': parseFloat(item.unitPrice) * item.quantity,
            '包1年原价(元)': parseFloat(item.year1Original),
            '包1年折扣价(元)': parseFloat(item.year1Discount),
            '包2年折扣价(元)': parseFloat(item.year2Discount),
            '包3年折扣价(元)': parseFloat(item.year3Discount),
            '包4年折扣价(元)': parseFloat(item.year4Discount),
            '包5年折扣价(元)': parseFloat(item.year5Discount)
        };
    });
    
    // 计算合计
    let totalUnitPrice = 0;
    let totalMonthTotal = 0;
    let totalYear1Original = 0;
    let totalYear1Discount = 0;
    let totalYear2Discount = 0;
    let totalYear3Discount = 0;
    let totalYear4Discount = 0;
    let totalYear5Discount = 0;
    
    compareList.forEach(item => {
        const monthTotal = parseFloat(item.unitPrice) * item.quantity;
        totalUnitPrice += parseFloat(item.unitPrice);
        totalMonthTotal += monthTotal;
        totalYear1Original += parseFloat(item.year1Original) * item.quantity;
        totalYear1Discount += parseFloat(item.year1Discount) * item.quantity;
        totalYear2Discount += parseFloat(item.year2Discount) * item.quantity;
        totalYear3Discount += parseFloat(item.year3Discount) * item.quantity;
        totalYear4Discount += parseFloat(item.year4Discount) * item.quantity;
        totalYear5Discount += parseFloat(item.year5Discount) * item.quantity;
    });
    
    // 添加合计行
    data.push({
        '序号': '',
        '规格类型': '',
        'CPU核数': '',
        '内存(GB)': '',
        '数量': '',
        '显卡配置': '',
        '存储配置': '',
        '弹性IP': '📊 合计',
        '月单价(元)': totalUnitPrice,
        '月总价(元)': totalMonthTotal,
        '包1年原价(元)': totalYear1Original,
        '包1年折扣价(元)': totalYear1Discount,
        '包2年折扣价(元)': totalYear2Discount,
        '包3年折扣价(元)': totalYear3Discount,
        '包4年折扣价(元)': totalYear4Discount,
        '包5年折扣价(元)': totalYear5Discount
    });
    
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, '云主机报价');
    
    // 设置列宽
    ws['!cols'] = [
        {wch: 6}, {wch: 18}, {wch: 10}, {wch: 10}, {wch: 8}, {wch: 30}, {wch: 35},
        {wch: 25}, {wch: 15}, {wch: 15}, {wch: 15}, {wch: 15}, {wch: 15}, {wch: 15}, {wch: 15}, {wch: 15}
    ];
    
    const fileName = '天翼云主机报价单_' + new Date().toISOString().slice(0, 10) + '.xlsx';
    XLSX.writeFile(wb, fileName);
}

// 导出详细Excel
function exportToExcelDetail() {
    if (compareList.length === 0) {
        alert('请先添加配置');
        return;
    }
    
    const billingModeText = { 'monthly': '包月', 'yearly': '包年', 'ondemand': '按需' };
    
    // 报价单信息
    const infoData = [
        ['天翼云公有云主机报价单'],
        [''],
        ['生成时间：' + new Date().toLocaleString('zh-CN')],
        ['报价有效期：30天'],
        ['']
    ];
    
    // 配置明细
    const detailData = compareList.map((item, index) => ({
        '序号': index + 1,
        '规格类型': item.specTypeName,
        'CPU核数': item.cpuCores,
        '内存(GB)': item.memorySize,
        '数量': item.quantity,
        '显卡配置': item.gpuModel ? `${item.gpuModel} × ${item.gpuCount} (${item.vram}GB显存)` : '-',
        '存储配置': item.diskConfig || '-',
        '月单价(元)': parseFloat(item.unitPrice),
        '包1年原价(元)': parseFloat(item.year1Original),
        '包1年折扣价(元)': parseFloat(item.year1Discount),
        '包2年折扣价(元)': parseFloat(item.year2Discount),
        '包3年折扣价(元)': parseFloat(item.year3Discount),
        '包4年折扣价(元)': parseFloat(item.year4Discount),
        '包5年折扣价(元)': parseFloat(item.year5Discount)
    }));
    
    // 合计
    const totalQuantity = compareList.reduce((sum, item) => sum + item.quantity, 0);
    
    const summaryData = [
        {},
        { '序号': '', '规格类型': '', 'CPU核数': '', '内存(GB)': '', '数量': totalQuantity, '显卡配置': '', '存储配置': '', '月单价(元)': '', '包1年原价(元)': '', '包1年折扣价(元)': '', '包2年折扣价(元)': '', '包3年折扣价(元)': '', '包4年折扣价(元)': '', '包5年折扣价(元)': '合计' }
    ];
    
    // 云硬盘折扣政策
    const diskDiscountPolicy = [
        {},
        {},
        ['云硬盘折扣政策参考：'],
        ['产品规格', '包月标准价格(元/G/月)', '1年折扣', '2年折扣', '3年折扣', '4年折扣', '5年折扣'],
        ['普通IO (SATA)', '0.3', '8.5折', '7折', '5折', '4.5折', '4折'],
        ['高IO (SAS)', '0.4', '8.5折', '7折', '5折', '4.5折', '4折'],
        ['通用型SSD', '0.7', '8.5折', '7折', '6折', '6折', '6折'],
        ['超高IO (SSD)', '1.2', '8.5折', '7折', '6折', '6折', '6折'],
        ['极速型SSD', '2', '8.5折', '7折', '5折', '4.5折', '4折'],
        ['XSSD-0', '0.5', '8.5折', '7折', '6折', '6折', '6折'],
        ['XSSD-1', '1', '8.5折', '7折', '6折', '6折', '6折'],
        ['XSSD-2', '2', '8.5折', '7折', '6折', '6折', '6折'],
        ['XSSD-3', '4', '8.5折', '7折', '6折', '6折', '6折']
    ];
    
    // 云主机折扣政策
    const discountPolicy = [
        {},
        {},
        ['云主机包年折扣政策参考：'],
        ['规格类型', '规格族', '1年', '2年', '3年', '4年', '5年'],
        ['通用型', 's2', '8.5折', '7折', '5折', '4.5折', '4折'],
        ['通用型', 's3, s6', '6折', '5.5折', '3折', '3折', '3折'],
        ['通用型', 's7, s8, s8e', '8折', '7.8折', '7.5折', '7.3折', '7.2折'],
        ['计算型', 'c3, c6', '6折', '5.5折', '3折', '3折', '3折'],
        ['计算型', 'c7, c8, c8e', '8折', '7.8折', '7.5折', '7.3折', '7.2折'],
        ['内存型', 'm3, m6', '6折', '5.5折', '3折', '3折', '3折'],
        ['内存型', 'm7, m8, m8e', '8折', '7.8折', '7.5折', '7.3折', '7.2折'],
        ['经济型', 'e', '3.4折', '2.5折', '2.1折', '2.1折', '2.1折']
    ];
    
    const wb = XLSX.utils.book_new();
    
    // 报价单sheet
    const wsData = [...infoData, ...XLSX.utils.sheet_to_json(XLSX.utils.json_to_sheet(detailData), {header: 1}), ...summaryData.map(s => Array.isArray(s) ? s : Object.values(s))];
    const ws = XLSX.utils.aoa_to_sheet(wsData);
    ws['!cols'] = [
        {wch: 6}, {wch: 18}, {wch: 10}, {wch: 10}, {wch: 8}, {wch: 30}, {wch: 35},
        {wch: 15}, {wch: 15}, {wch: 15}, {wch: 15}, {wch: 15}, {wch: 15}, {wch: 15}
    ];
    XLSX.utils.book_append_sheet(wb, ws, '报价单');
    
    // 折扣政策sheet
    const wsPolicy = XLSX.utils.aoa_to_sheet(discountPolicy);
    XLSX.utils.book_append_sheet(wb, wsPolicy, '主机折扣政策');
    
    // 云硬盘折扣政策sheet
    const wsDiskPolicy = XLSX.utils.aoa_to_sheet(diskDiscountPolicy);
    XLSX.utils.book_append_sheet(wb, wsDiskPolicy, '云硬盘折扣政策');
    
    const fileName = '天翼云主机详细报价单_' + new Date().toISOString().slice(0, 10) + '.xlsx';
    XLSX.writeFile(wb, fileName);
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('[Init] DOMContentLoaded 触发');
    initSpecSelector();
});

// 如果 DOM 已经加载完成，立即初始化
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    console.log('[Init] DOM已就绪，立即初始化');
    setTimeout(function() {
        initSpecSelector();
    }, 1);
}

// 规格类别到规格类型的映射
const specCategoryMap = {
    'general': ['s8e', 's8r', 's8', 's7', 's6', 's3', 's2'],
    'compute': ['c8a', 'c8e', 'c8', 'c7', 'c6', 'c3'],
    'memory': ['m8a', 'm8e', 'm8', 'm7', 'm6', 'm3', 'm2'],
    'enhanced': ['c8ne', 'm8ne', 'c7ne'],
    'kunpeng': ['ks2x', 'ks1', 'kc2x', 'kc1', 'km2x', 'km1', 'ks2xne', 'kc2xne', 'km2xne'],
    'hygon': ['hs3x', 'hs1', 'hc3x', 'hc1', 'hm3x', 'hm1', 'hs3xne', 'hc3xne', 'hm3xne', 'hc4t', 'hm4t'],
    'phytium': ['fs1', 'fc1', 'fm1'],
    'economy': ['e'],
    'gpu': ['g7', 'g6', 'g5', 'pi7', 'pi2', 'p8a', 'pn8s', 'pn8i', 'pak3', 'pak2', 'pak1', 'pch1']
};

// 规格类型名称映射
const specTypeNames = {
    's8e': '通用型 s8e', 's8r': '通用型 s8r', 's8': '通用型 s8', 's7': '通用型 s7', 's6': '通用型 s6', 's3': '通用型 s3', 's2': '通用型 s2',
    'c8a': '计算型 c8a', 'c8e': '计算型 c8e', 'c8': '计算型 c8', 'c7': '计算型 c7', 'c6': '计算型 c6', 'c3': '计算型 c3',
    'm8a': '内存型 m8a', 'm8e': '内存型 m8e', 'm8': '内存型 m8', 'm7': '内存型 m7', 'm6': '内存型 m6', 'm3': '内存型 m3', 'm2': '内存型 m2',
    'c8ne': '增强计算型 c8ne', 'm8ne': '增强内存型 m8ne', 'c7ne': '增强计算型 c7ne',
    'ks2x': '鲲鹏通用型 ks2x', 'ks1': '鲲鹏通用型 ks1',
    'kc2x': '鲲鹏计算型 kc2x', 'kc1': '鲲鹏计算型 kc1',
    'km2x': '鲲鹏内存型 km2x', 'km1': '鲲鹏内存型 km1',
    'ks2xne': '鲲鹏增强通用型 ks2xne', 'kc2xne': '鲲鹏增强计算型 kc2xne', 'km2xne': '鲲鹏增强内存型 km2xne',
    'hs3x': '海光通用型 hs3x', 'hs1': '海光通用型 hs1',
    'hc3x': '海光计算型 hc3x', 'hc1': '海光计算型 hc1',
    'hm3x': '海光内存型 hm3x', 'hm1': '海光内存型 hm1',
    'hs3xne': '海光增强通用型 hs3xne', 'hc3xne': '海光增强计算型 hc3xne', 'hm3xne': '海光增强内存型 hm3xne',
    'hc4t': '海光安全增强计算型 hc4t', 'hm4t': '海光安全增强内存型 hm4t',
    'fs1': '飞腾通用型 fs1', 'fc1': '飞腾计算型 fc1', 'fm1': '飞腾内存型 fm1',
    'e': '经济型 e',
    'g7': 'G7(A10图像)', 'g6': 'G6(T4图像)', 'g5': 'G5(V100图像)',
    'pi7': 'PI7(A10计算)', 'pi2': 'PI2(T4计算)', 'p8a': 'P8A(A100计算)',
    'pn8s': 'PN8S(L40S计算)', 'pn8i': 'PN8I(L20计算)',
    'pak3': 'PAK3(昇腾)', 'pak2': 'PAK2(昇腾)', 'pak1': 'PAK1(昇腾)',
    'pch1': 'PCH1(寒武纪)'
};

// 初始化规格选择器
function initSpecSelector() {
    console.log('[SpecSelector] 初始化规格选择器');
    // 初始化规格类型选项
    updateSpecTypes();
}

// 更新规格类型选项（根据类别）
function updateSpecTypes() {
    const category = document.getElementById('specCategory').value;
    const specTypeSelect = document.getElementById('specType');
    const types = specCategoryMap[category] || [];
    
    console.log('[SpecSelector] 类别:', category, '规格类型:', types);
    
    specTypeSelect.innerHTML = '';
    for (const type of types) {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = specTypeNames[type] || type;
        specTypeSelect.appendChild(option);
    }
    
    // GPU类别特殊处理
    const isGpu = category === 'gpu';
    const gpuSpec = document.getElementById('gpuSpec');
    const gpuInfo = document.getElementById('gpuInfo');
    const cpuCores = document.getElementById('cpuCores');
    const memorySize = document.getElementById('memorySize');
    const cpuHint = document.getElementById('cpuHint');
    const memHint = document.getElementById('memHint');
    
    if (isGpu) {
        // 显示GPU选择器，隐藏CPU/内存
        if (gpuSpec) gpuSpec.style.display = 'block';
        if (gpuInfo) gpuInfo.style.display = 'block';
        cpuCores.disabled = true;
        memorySize.disabled = true;
        cpuHint.style.display = 'none';
        memHint.style.display = 'none';
        updateGpuSpecOptions();
    } else {
        // 隐藏GPU选择器，显示CPU/内存
        if (gpuSpec) gpuSpec.style.display = 'none';
        if (gpuInfo) gpuInfo.style.display = 'none';
        cpuCores.disabled = false;
        memorySize.disabled = false;
        cpuHint.style.display = 'block';
        memHint.style.display = 'block';
        updateCpuOptions();
    }
}

// 更新CPU选项
function updateCpuOptions() {
    const specType = document.getElementById('specType').value;
    const cpuSelect = document.getElementById('cpuCores');
    const cpuHint = document.getElementById('cpuHint');
    
    // GPU规格不走这里
    if (isGpuSpec(specType)) {
        return;
    }
    
    const supportedCpus = getSupportedCpus(specType);
    
    console.log('[SpecSelector] 规格:', specType, '支持CPU:', supportedCpus);
    
    // 显示提示
    if (supportedCpus.length > 0) {
        cpuHint.textContent = `可选: ${supportedCpus.join(', ')}核`;
        cpuHint.style.color = '#888';
    } else {
        cpuHint.textContent = `❌ 未找到 ${specType} 规格配置`;
        cpuHint.style.color = '#e74c3c';
    }
    
    // 只显示支持的CPU选项
    cpuSelect.innerHTML = '';
    for (const cpu of supportedCpus) {
        const option = document.createElement('option');
        option.value = cpu;
        option.textContent = cpu + ' 核';
        cpuSelect.appendChild(option);
    }
    
    // 默认选择第一个
    if (supportedCpus.length > 0) {
        cpuSelect.value = String(supportedCpus[0]);
    }
    
    updateMemOptions();
}

// 更新内存选项
function updateMemOptions() {
    const specType = document.getElementById('specType').value;
    const cpu = parseInt(document.getElementById('cpuCores').value);
    const memSelect = document.getElementById('memorySize');
    const memHint = document.getElementById('memHint');
    const supportedMems = getSupportedMems(specType, cpu);
    
    console.log('[SpecSelector] 规格:', specType, 'CPU:', cpu, '支持内存:', supportedMems);
    
    // 如果没有支持的内存配置
    if (supportedMems.length === 0) {
        memHint.textContent = `❌ ${specType}规格不支持${cpu}核CPU`;
        memHint.style.color = '#e74c3c';
        memSelect.innerHTML = '<option value="">-- 请先选择有效CPU --</option>';
        return;
    }
    
    // 显示提示
    memHint.textContent = `可选: ${supportedMems.join(', ')}G`;
    memHint.style.color = '#888';
    
    // 只显示支持的内存选项
    memSelect.innerHTML = '';
    for (const mem of supportedMems) {
        const option = document.createElement('option');
        option.value = mem;
        option.textContent = mem + ' GB';
        memSelect.appendChild(option);
    }
    
    // 默认选择第一个
    if (supportedMems.length > 0) {
        memSelect.value = String(supportedMems[0]);
    }
}

// GPU云主机规格数据 - 官方文档 https://www.ctyun.cn/document/10029787/10047957
// 格式: gpuSpecData[规格名] = [{vcpu, mem, gpuCount, gpuModel, vram, hourly, monthly}, ...]
const gpuSpecData = {
    // A10 图像加速基础型 G7
    'g7.2xlarge.4': [{ vcpu: 8, mem: 32, gpuCount: '1/4', gpuModel: 'A10', vram: 6, hourly: 4.24, monthly: 2033.34 }],
    'g7.4xlarge.4': [{ vcpu: 16, mem: 64, gpuCount: '1/2', gpuModel: 'A10', vram: 12, hourly: 8.48, monthly: 4066.68 }],
    'g7.8xlarge.4': [{ vcpu: 32, mem: 128, gpuCount: '1', gpuModel: 'A10', vram: 24, hourly: 16.96, monthly: 8133.36 }],
    // T4 图像加速基础型 G6
    'g6.xlarge.4': [{ vcpu: 4, mem: 16, gpuCount: '1/4', gpuModel: 'T4', vram: 4, hourly: 2.445, monthly: 1173.65 }],
    'g6.2xlarge.4': [{ vcpu: 8, mem: 32, gpuCount: '1/2', gpuModel: 'T4', vram: 8, hourly: 5.053, monthly: 2425.56 }],
    // V100 图像加速基础型 G5
    'g5.2xlarge.2': [{ vcpu: 8, mem: 16, gpuCount: '1/16', gpuModel: 'V100', vram: 2, hourly: 2.74, monthly: 1316 }],
    'g5.2xlarge': [{ vcpu: 8, mem: 32, gpuCount: '1/8', gpuModel: 'V100', vram: 4, hourly: 5.48, monthly: 2632 }],
    'g5.4xlarge.4': [{ vcpu: 16, mem: 64, gpuCount: '1/4', gpuModel: 'V100', vram: 8, hourly: 10.97, monthly: 5263 }],
    'g5.2xlarge.8': [{ vcpu: 8, mem: 64, gpuCount: '1/2', gpuModel: 'V100', vram: 16, hourly: 16.44, monthly: 7890 }],
    'g5.8xlarge.4': [{ vcpu: 32, mem: 128, gpuCount: '1/2', gpuModel: 'V100', vram: 16, hourly: 21.93, monthly: 10527 }],
    // V100S 图像加速基础型 G5S
    'g5s.2xlarge.2': [{ vcpu: 8, mem: 16, gpuCount: '1/16', gpuModel: 'V100S', vram: 2, hourly: 2.74, monthly: 1316 }],
    'g5s.2xlarge': [{ vcpu: 8, mem: 32, gpuCount: '1/8', gpuModel: 'V100S', vram: 4, hourly: 5.48, monthly: 2632 }],
    'g5s.4xlarge': [{ vcpu: 16, mem: 64, gpuCount: '1/4', gpuModel: 'V100S', vram: 8, hourly: 10.97, monthly: 5263 }],
    'g5s.2xlarge.8': [{ vcpu: 8, mem: 64, gpuCount: '1/2', gpuModel: 'V100S', vram: 16, hourly: 16.44, monthly: 7890 }],
    'g5s.8xlarge.4': [{ vcpu: 32, mem: 128, gpuCount: '1/2', gpuModel: 'V100S', vram: 16, hourly: 21.93, monthly: 10527 }],
    // A10 计算加速型 PI7
    'pi7.4xlarge.4': [{ vcpu: 16, mem: 64, gpuCount: '1', gpuModel: 'A10', vram: 24, hourly: 9.27, monthly: 4474.43 }],
    'pi7.8xlarge.4': [{ vcpu: 32, mem: 128, gpuCount: '2', gpuModel: 'A10', vram: 48, hourly: 18.54, monthly: 8948.85 }],
    'pi7.16xlarge.4': [{ vcpu: 64, mem: 256, gpuCount: '4', gpuModel: 'A10', vram: 96, hourly: 37.05, monthly: 17889.69 }],
    // T4 计算加速型 PI2
    'pi2.2xlarge.4': [{ vcpu: 8, mem: 32, gpuCount: '1', gpuModel: 'T4', vram: 16, hourly: 7.32, monthly: 3515 }],
    'pi2.4xlarge.4': [{ vcpu: 16, mem: 64, gpuCount: '2', gpuModel: 'T4', vram: 32, hourly: 14.65, monthly: 7030 }],
    'pi2.8xlarge.4': [{ vcpu: 32, mem: 128, gpuCount: '4', gpuModel: 'T4', vram: 64, hourly: 29.30, monthly: 14060 }],
    // A100 计算加速型 P8A
    'p8a.6xlarge.4': [{ vcpu: 24, mem: 96, gpuCount: '1', gpuModel: 'A100', vram: 40, hourly: 21.31, monthly: 10229.09 }],
    'p8a.12xlarge.4': [{ vcpu: 48, mem: 192, gpuCount: '2', gpuModel: 'A100', vram: 80, hourly: 42.62, monthly: 20458.17 }],
    'p8a.24xlarge.4': [{ vcpu: 96, mem: 384, gpuCount: '4', gpuModel: 'A100', vram: 160, hourly: 85.24, monthly: 40916.34 }],
    // A100 计算加速型 P8AV
    'p8av.3xlarge.8': [{ vcpu: 12, mem: 96, gpuCount: '1', gpuModel: 'A100', vram: 40, hourly: 31.27, monthly: 15008 }],
    'p8av.6xlarge.8': [{ vcpu: 24, mem: 192, gpuCount: '2', gpuModel: 'A100', vram: 80, hourly: 62.53, monthly: 30016 }],
    'p8av.13xlarge.8': [{ vcpu: 52, mem: 416, gpuCount: '4', gpuModel: 'A100', vram: 160, hourly: 125.07, monthly: 60032 }],
    'p8av.27xlarge.8': [{ vcpu: 108, mem: 864, gpuCount: '8', gpuModel: 'A100', vram: 320, hourly: 250.13, monthly: 120063 }],
    // V100 计算加速型 P2V
    'p2v.2xlarge.4': [{ vcpu: 8, mem: 32, gpuCount: '1', gpuModel: 'V100', vram: 32, hourly: 15.37, monthly: 7377.8 }],
    'p2v.4xlarge.4': [{ vcpu: 16, mem: 64, gpuCount: '2', gpuModel: 'V100', vram: 64, hourly: 30.74, monthly: 14755.6 }],
    'p2v.8xlarge.4': [{ vcpu: 32, mem: 128, gpuCount: '4', gpuModel: 'V100', vram: 128, hourly: 61.48, monthly: 29511.2 }],
    'p2v.4xlarge.8': [{ vcpu: 16, mem: 128, gpuCount: '1', gpuModel: 'V100', vram: 32, hourly: 32.87, monthly: 15780 }],
    'p2v.8xlarge.8': [{ vcpu: 32, mem: 256, gpuCount: '2', gpuModel: 'V100', vram: 64, hourly: 65.75, monthly: 31559 }],
    // V100S 计算加速型 P2VS
    'p2vs.2xlarge.4': [{ vcpu: 8, mem: 32, gpuCount: '1', gpuModel: 'V100S', vram: 32, hourly: 15.37, monthly: 7377.8 }],
    'p2vs.4xlarge.4': [{ vcpu: 16, mem: 64, gpuCount: '2', gpuModel: 'V100S', vram: 64, hourly: 30.74, monthly: 14755.6 }],
    'p2vs.8xlarge.4': [{ vcpu: 32, mem: 128, gpuCount: '4', gpuModel: 'V100S', vram: 128, hourly: 61.48, monthly: 29511.2 }],
    'p2vs.4xlarge.8': [{ vcpu: 16, mem: 128, gpuCount: '1', gpuModel: 'V100S', vram: 32, hourly: 32.87, monthly: 15780 }],
    'p2vs.8xlarge.8': [{ vcpu: 32, mem: 256, gpuCount: '2', gpuModel: 'V100S', vram: 64, hourly: 65.75, monthly: 31559 }],
    // L40S 计算加速型 PN8S
    'pn8s.5xlarge.4': [{ vcpu: 20, mem: 74, gpuCount: '1', gpuModel: 'L40S', vram: 48, hourly: 31.28, monthly: 15012 }],
    'pn8s.11xlarge.4': [{ vcpu: 44, mem: 148, gpuCount: '2', gpuModel: 'L40S', vram: 96, hourly: 62.55, monthly: 30024 }],
    'pn8s.22xlarge.4': [{ vcpu: 88, mem: 296, gpuCount: '4', gpuModel: 'L40S', vram: 192, hourly: 125.10, monthly: 60047 }],
    'pn8s.44xlarge.4': [{ vcpu: 176, mem: 592, gpuCount: '8', gpuModel: 'L40S', vram: 384, hourly: 250.20, monthly: 120095 }],
    // L20 计算加速型 PN8I
    'pn8i.4xlarge.8': [{ vcpu: 16, mem: 128, gpuCount: '1', gpuModel: 'L20', vram: 48, hourly: 15.72, monthly: 7545 }],
    'pn8i.8xlarge.8': [{ vcpu: 32, mem: 256, gpuCount: '2', gpuModel: 'L20', vram: 96, hourly: 31.44, monthly: 15090 }],
    'pn8i.16xlarge.8': [{ vcpu: 64, mem: 512, gpuCount: '4', gpuModel: 'L20', vram: 192, hourly: 62.88, monthly: 30180 }],
    'pn8i.32xlarge.8': [{ vcpu: 128, mem: 1024, gpuCount: '8', gpuModel: 'L20', vram: 384, hourly: 125.75, monthly: 60361 }],
    'pn8i.43xlarge.8': [{ vcpu: 172, mem: 1336, gpuCount: '8', gpuModel: 'L20', vram: 384, hourly: 136.87, monthly: 65698 }],
    // GPU计算加速型 PN8R (NVIDIA高性价比显卡)
    'pn8r.4xlarge.4': [{ vcpu: 16, mem: 64, gpuCount: '1', gpuModel: 'NVIDIA高性价比显卡', vram: 24, hourly: 18.77, monthly: 4211 }],
    'pn8r.8xlarge.4': [{ vcpu: 32, mem: 128, gpuCount: '2', gpuModel: 'NVIDIA高性价比显卡', vram: 48, hourly: 37.55, monthly: 8422 }],
    'pn8r.12xlarge.4': [{ vcpu: 48, mem: 192, gpuCount: '3', gpuModel: 'NVIDIA高性价比显卡', vram: 72, hourly: 56.32, monthly: 12633 }],
    'pn8r.16xlarge.4': [{ vcpu: 64, mem: 256, gpuCount: '4', gpuModel: 'NVIDIA高性价比显卡', vram: 96, hourly: 75.09, monthly: 16844 }],
    'pn8r.20xlarge.4': [{ vcpu: 80, mem: 320, gpuCount: '5', gpuModel: 'NVIDIA高性价比显卡', vram: 120, hourly: 93.86, monthly: 21055 }],
    'pn8r.24xlarge.4': [{ vcpu: 96, mem: 384, gpuCount: '6', gpuModel: 'NVIDIA高性价比显卡', vram: 144, hourly: 112.64, monthly: 25266 }],
    'pn8r.28xlarge.4': [{ vcpu: 112, mem: 448, gpuCount: '7', gpuModel: 'NVIDIA高性价比显卡', vram: 168, hourly: 131.41, monthly: 29477 }],
    'pn8r.32xlarge.4': [{ vcpu: 128, mem: 512, gpuCount: '8', gpuModel: 'NVIDIA高性价比显卡', vram: 192, hourly: 150.18, monthly: 33688 }],
    'pn8r.45xlarge.4': [{ vcpu: 180, mem: 824, gpuCount: '8', gpuModel: 'NVIDIA高性价比显卡', vram: 192, hourly: 184.32, monthly: 40473 }],
    // 昇腾计算加速型 PAK3
    'pak3.4xlarge.8': [{ vcpu: 16, mem: 128, gpuCount: '1', gpuModel: 'Ascend 910B', vram: 64, hourly: 38.45, monthly: 18454 }],
    // 昇腾计算加速型 PAK2
    'pak2.4xlarge.8': [{ vcpu: 16, mem: 128, gpuCount: '1', gpuModel: 'Atlas 300I Duo', vram: 96, hourly: 13.59, monthly: 6525 }],
    'pak2.4xlarge.9': [{ vcpu: 16, mem: 144, gpuCount: '1', gpuModel: 'Atlas 300I Duo', vram: 96, hourly: 14.09, monthly: 6765 }],
    // 昇腾计算加速型 PAK1
    'pak1.4xlarge.4': [{ vcpu: 18, mem: 72, gpuCount: '1', gpuModel: 'Atlas 300i pro', vram: 24, hourly: 10.69, monthly: 5133.49 }],
    'pak1.9xlarge.4': [{ vcpu: 36, mem: 144, gpuCount: '2', gpuModel: 'Atlas 300i pro', vram: 48, hourly: 21.39, monthly: 10266.97 }],
    'pak1.18xlarge.4': [{ vcpu: 72, mem: 288, gpuCount: '4', gpuModel: 'Atlas 300i pro', vram: 96, hourly: 42.78, monthly: 20533.95 }],
    // 寒武纪计算加速型 PCH1
    'pch1.4xlarge.4': [{ vcpu: 16, mem: 64, gpuCount: '1', gpuModel: 'Cambricon MLU370 s4', vram: 24, hourly: 13.00, monthly: 6241.02 }],
    'pch1.6xlarge.4': [{ vcpu: 24, mem: 96, gpuCount: '1', gpuModel: 'Cambricon MLU370 s4', vram: 24, hourly: 14.45, monthly: 6934.46 }],
    'pch1.9xlarge.4': [{ vcpu: 36, mem: 144, gpuCount: '2', gpuModel: 'Cambricon MLU370 s4', vram: 48, hourly: 26.00, monthly: 12482.04 }],
    'pch1.12xlarge.4': [{ vcpu: 48, mem: 192, gpuCount: '3', gpuModel: 'Cambricon MLU370 s4', vram: 72, hourly: 39.01, monthly: 18723.05 }],
    'pch1.21xlarge.3': [{ vcpu: 84, mem: 252, gpuCount: '4', gpuModel: 'Cambricon MLU370 s4', vram: 96, hourly: 52.01, monthly: 24964.07 }]
};

// GPU规格组
const gpuSpecGroups = {
    'g7': ['g7.2xlarge.4', 'g7.4xlarge.4', 'g7.8xlarge.4'],
    'g6': ['g6.xlarge.4', 'g6.2xlarge.4'],
    'g5': ['g5.2xlarge.2', 'g5.2xlarge', 'g5.4xlarge.4', 'g5.2xlarge.8', 'g5.8xlarge.4'],
    'g5s': ['g5s.2xlarge.2', 'g5s.2xlarge', 'g5s.4xlarge', 'g5s.2xlarge.8', 'g5s.8xlarge.4'],
    'pi7': ['pi7.4xlarge.4', 'pi7.8xlarge.4', 'pi7.16xlarge.4'],
    'pi2': ['pi2.2xlarge.4', 'pi2.4xlarge.4', 'pi2.8xlarge.4'],
    'p8a': ['p8a.6xlarge.4', 'p8a.12xlarge.4', 'p8a.24xlarge.4'],
    'p8av': ['p8av.3xlarge.8', 'p8av.6xlarge.8', 'p8av.13xlarge.8', 'p8av.27xlarge.8'],
    'p2v': ['p2v.2xlarge.4', 'p2v.4xlarge.4', 'p2v.8xlarge.4', 'p2v.4xlarge.8', 'p2v.8xlarge.8'],
    'p2vs': ['p2vs.2xlarge.4', 'p2vs.4xlarge.4', 'p2vs.8xlarge.4', 'p2vs.4xlarge.8', 'p2vs.8xlarge.8'],
    'pn8s': ['pn8s.5xlarge.4', 'pn8s.11xlarge.4', 'pn8s.22xlarge.4', 'pn8s.44xlarge.4'],
    'pn8i': ['pn8i.4xlarge.8', 'pn8i.8xlarge.8', 'pn8i.16xlarge.8', 'pn8i.32xlarge.8', 'pn8i.43xlarge.8'],
    'pn8r': ['pn8r.4xlarge.4', 'pn8r.8xlarge.4', 'pn8r.12xlarge.4', 'pn8r.16xlarge.4', 'pn8r.20xlarge.4', 'pn8r.24xlarge.4', 'pn8r.28xlarge.4', 'pn8r.32xlarge.4', 'pn8r.45xlarge.4'],
    'pak3': ['pak3.4xlarge.8'],
    'pak2': ['pak2.4xlarge.8', 'pak2.4xlarge.9'],
    'pak1': ['pak1.4xlarge.4', 'pak1.9xlarge.4', 'pak1.18xlarge.4'],
    'pch1': ['pch1.4xlarge.4', 'pch1.6xlarge.4', 'pch1.9xlarge.4', 'pch1.12xlarge.4', 'pch1.21xlarge.3']
};

// GPU规格名称
const gpuSpecNames = {
    'g7.2xlarge.4': 'A10图像加速 G7(1/4卡)',
    'g7.4xlarge.4': 'A10图像加速 G7(1/2卡)',
    'g7.8xlarge.4': 'A10图像加速 G7(1卡)',
    'g6.xlarge.4': 'T4图像加速 G6(1/4卡)',
    'g6.2xlarge.4': 'T4图像加速 G6(1/2卡)',
    'g5.2xlarge.2': 'V100图像加速 G5(1/16卡)',
    'g5.2xlarge': 'V100图像加速 G5(1/8卡)',
    'g5.4xlarge.4': 'V100图像加速 G5(1/4卡)',
    'g5.2xlarge.8': 'V100图像加速 G5(1/2卡)',
    'g5.8xlarge.4': 'V100图像加速 G5(1/2卡)',
    'g5s.2xlarge.2': 'V100S图像加速 G5S(1/16卡)',
    'g5s.2xlarge': 'V100S图像加速 G5S(1/8卡)',
    'g5s.4xlarge.4': 'V100S图像加速 G5S(1/4卡)',
    'g5s.2xlarge.8': 'V100S图像加速 G5S(1/2卡)',
    'g5s.8xlarge.4': 'V100S图像加速 G5S(1/2卡)',
    'pi7.4xlarge.4': 'A10计算加速 PI7(1卡)',
    'pi7.8xlarge.4': 'A10计算加速 PI7(2卡)',
    'pi7.16xlarge.4': 'A10计算加速 PI7(4卡)',
    'pi2.2xlarge.4': 'T4计算加速 PI2(1卡)',
    'pi2.4xlarge.4': 'T4计算加速 PI2(2卡)',
    'pi2.8xlarge.4': 'T4计算加速 PI2(4卡)',
    'p8a.6xlarge.4': 'A100计算加速 P8A(1卡)',
    'p8a.12xlarge.4': 'A100计算加速 P8A(2卡)',
    'p8a.24xlarge.4': 'A100计算加速 P8A(4卡)',
    'p8av.3xlarge.8': 'A100计算加速 P8AV(1卡)',
    'p8av.6xlarge.8': 'A100计算加速 P8AV(2卡)',
    'p8av.13xlarge.8': 'A100计算加速 P8AV(4卡)',
    'p8av.27xlarge.8': 'A100计算加速 P8AV(8卡)',
    'p2v.2xlarge.4': 'V100计算加速 P2V(1卡)',
    'p2v.4xlarge.4': 'V100计算加速 P2V(2卡)',
    'p2v.8xlarge.4': 'V100计算加速 P2V(4卡)',
    'p2v.4xlarge.8': 'V100计算加速 P2V(1卡)',
    'p2v.8xlarge.8': 'V100计算加速 P2V(2卡)',
    'p2vs.2xlarge.4': 'V100S计算加速 P2VS(1卡)',
    'p2vs.4xlarge.4': 'V100S计算加速 P2VS(2卡)',
    'p2vs.8xlarge.4': 'V100S计算加速 P2VS(4卡)',
    'p2vs.4xlarge.8': 'V100S计算加速 P2VS(1卡)',
    'p2vs.8xlarge.8': 'V100S计算加速 P2VS(2卡)',
    'pn8s.5xlarge.4': 'L40S计算加速 PN8S(1卡)',
    'pn8s.11xlarge.4': 'L40S计算加速 PN8S(2卡)',
    'pn8s.22xlarge.4': 'L40S计算加速 PN8S(4卡)',
    'pn8s.44xlarge.4': 'L40S计算加速 PN8S(8卡)',
    'pn8i.4xlarge.8': 'L20计算加速 PN8I(1卡)',
    'pn8i.8xlarge.8': 'L20计算加速 PN8I(2卡)',
    'pn8i.16xlarge.8': 'L20计算加速 PN8I(4卡)',
    'pn8i.32xlarge.8': 'L20计算加速 PN8I(8卡)',
    'pn8i.43xlarge.8': 'L20计算加速 PN8I(8卡)',
    'pn8r.4xlarge.4': 'NVIDIA计算加速 PN8R(1卡)',
    'pn8r.8xlarge.4': 'NVIDIA计算加速 PN8R(2卡)',
    'pn8r.12xlarge.4': 'NVIDIA计算加速 PN8R(3卡)',
    'pn8r.16xlarge.4': 'NVIDIA计算加速 PN8R(4卡)',
    'pn8r.20xlarge.4': 'NVIDIA计算加速 PN8R(5卡)',
    'pn8r.24xlarge.4': 'NVIDIA计算加速 PN8R(6卡)',
    'pn8r.28xlarge.4': 'NVIDIA计算加速 PN8R(7卡)',
    'pn8r.32xlarge.4': 'NVIDIA计算加速 PN8R(8卡)',
    'pn8r.45xlarge.4': 'NVIDIA计算加速 PN8R(8卡)',
    'pak3.4xlarge.8': '昇腾计算加速 PAK3(1卡)',
    'pak2.4xlarge.8': '昇腾计算加速 PAK2(1卡)',
    'pak2.4xlarge.9': '昇腾计算加速 PAK2(1卡)',
    'pak1.4xlarge.4': '昇腾计算加速 PAK1(1卡)',
    'pak1.9xlarge.4': '昇腾计算加速 PAK1(2卡)',
    'pak1.18xlarge.4': '昇腾计算加速 PAK1(4卡)',
    'pch1.4xlarge.4': '寒武纪计算加速 PCH1(1卡)',
    'pch1.6xlarge.4': '寒武纪计算加速 PCH1(1卡)',
    'pch1.9xlarge.4': '寒武纪计算加速 PCH1(2卡)',
    'pch1.12xlarge.4': '寒武纪计算加速 PCH1(3卡)',
    'pch1.21xlarge.3': '寒武纪计算加速 PCH1(4卡)'
};

// GPU类别映射
const gpuCategoryMap = {
    'g7': 'G7(A10图像)',
    'g6': 'G6(T4图像)',
    'g5': 'G5(V100图像)',
    'g5s': 'G5S(V100S图像)',
    'pi7': 'PI7(A10计算)',
    'pi2': 'PI2(T4计算)',
    'p8a': 'P8A(A100计算)',
    'p8av': 'P8AV(A100计算)',
    'p2v': 'P2V(V100计算)',
    'p2vs': 'P2VS(V100S计算)',
    'pn8s': 'PN8S(L40S计算)',
    'pn8i': 'PN8I(L20计算)',
    'pn8r': 'PN8R(NVIDIA计算)',
    'pak3': 'PAK3(昇腾)',
    'pak2': 'PAK2(昇腾)',
    'pak1': 'PAK1(昇腾)',
    'pch1': 'PCH1(寒武纪)'
};

// 检查是否是GPU规格
function isGpuSpec(specType) {
    return gpuSpecData.hasOwnProperty(specType);
}

// 获取GPU规格信息
function getGpuSpecInfo(specType) {
    return gpuSpecData[specType] || null;
}

// 更新GPU规格选择器
function updateGpuSpecOptions() {
    const gpuGroup = document.getElementById('specType').value;
    const gpuSpecSelect = document.getElementById('gpuSpec');
    
    if (!gpuSpecSelect) return;
    
    const specs = gpuSpecGroups[gpuGroup] || [];
    gpuSpecSelect.innerHTML = '';
    for (const spec of specs) {
        const option = document.createElement('option');
        option.value = spec;
        option.textContent = gpuSpecNames[spec] || spec;
        gpuSpecSelect.appendChild(option);
    }
    
    // 选择第一个
    if (specs.length > 0) {
        updateGpuInfo();
    }
}

// 更新GPU信息显示
function updateGpuInfo() {
    const gpuSpec = document.getElementById('gpuSpec');
    if (!gpuSpec) return;
    
    const configs = gpuSpecData[gpuSpec.value];
    const gpuInfoDiv = document.getElementById('gpuInfo');
    const cpuCores = document.getElementById('cpuCores');
    const memorySize = document.getElementById('memorySize');
    
    if (!configs || configs.length === 0) return;
    
    // 获取第一个配置的基本GPU信息
    const baseInfo = configs[0];
    
    // 更新GPU信息显示
    if (gpuInfoDiv) {
        gpuInfoDiv.innerHTML = `
            <div style="color: #27ae60; font-weight: bold;">GPU信息</div>
            <div style="font-size: 0.85rem;">显卡: ${baseInfo.gpuModel} | 数量: ${baseInfo.gpuCount} | 显存: ${baseInfo.vram}GB</div>
        `;
    }
    
    // 更新CPU选项（支持多种配置）
    if (cpuCores) {
        cpuCores.innerHTML = '';
        const uniqueCpus = [...new Set(configs.map(c => c.vcpu))];
        for (const cpu of uniqueCpus) {
            const option = document.createElement('option');
            option.value = cpu;
            option.textContent = cpu + ' 核';
            cpuCores.appendChild(option);
        }
        cpuCores.value = configs[0].vcpu;
        // 启用CPU选择（如果有多个选项）
        cpuCores.disabled = uniqueCpus.length <= 1;
    }
    
    // 更新内存选项（根据选中的CPU过滤）
    updateGpuMemOptions(configs);
}

// 更新GPU内存选项（根据CPU选择）
function updateGpuMemOptions(configs) {
    const gpuSpec = document.getElementById('gpuSpec');
    const cpuCores = document.getElementById('cpuCores');
    const memorySize = document.getElementById('memorySize');
    
    if (!gpuSpec || !cpuCores || !memorySize) return;
    
    const allConfigs = gpuSpecData[gpuSpec.value];
    if (!allConfigs) return;
    
    const selectedCpu = parseInt(cpuCores.value);
    const matchingConfigs = allConfigs.filter(c => c.vcpu === selectedCpu);
    
    memorySize.innerHTML = '';
    for (const config of matchingConfigs) {
        const option = document.createElement('option');
        option.value = config.mem;
        option.textContent = config.mem + ' GB';
        // 存储价格信息到option的data属性
        option.dataset.hourly = config.hourly;
        option.dataset.monthly = config.monthly;
        memorySize.appendChild(option);
    }
    
    if (matchingConfigs.length > 0) {
        memorySize.value = matchingConfigs[0].mem;
    }
    
    // 启用/禁用内存选择
    memorySize.disabled = matchingConfigs.length <= 1;
}

// 获取当前选中的GPU配置信息
function getSelectedGpuConfig() {
    const gpuSpec = document.getElementById('gpuSpec');
    const cpuCores = document.getElementById('cpuCores');
    const memorySize = document.getElementById('memorySize');
    
    if (!gpuSpec) return null;
    
    const configs = gpuSpecData[gpuSpec.value];
    if (!configs) return null;
    
    const selectedCpu = parseInt(cpuCores?.value || configs[0].vcpu);
    const selectedMem = parseInt(memorySize?.value || configs[0].mem);
    
    // 查找匹配的配置
    const config = configs.find(c => c.vcpu === selectedCpu && c.mem === selectedMem);
    return config || configs[0];
}
