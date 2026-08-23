import type { MethodologyContent } from '../types';

export const vi: MethodologyContent = {
  title: 'Phương pháp tính',
  updated: 'Áp dụng cho phiên bản {version}',

  disclaimerTitle: 'Hãy đọc phần này trước',
  disclaimer: [
    'Trang này tồn tại để bạn có thể kiểm chứng từng con số mà máy tính hiển thị. Nó trình bày mọi công thức, thứ tự áp dụng, và một ví dụ được giải trọn vẹn mà bạn có thể làm lại bằng giấy bút. Đây là thông tin mang tính giải thích về cách công cụ hoạt động — không phải tư vấn tài chính, đầu tư, thuế hay pháp lý, và cũng không phải khuyến nghị mua, bán hay nắm giữ bất cứ thứ gì.',
    'Mọi thứ máy tính đưa ra đều là phép chiếu từ các giả định bạn nhập vào, không phải dự báo. Nó giả định lợi nhuận, lạm phát và thuế suất không đổi trong suốt kỳ hạn. Thị trường thật không vận hành như vậy. Kết quả thực tế sẽ khác, và trên chặng đường dài mức chênh có thể rất lớn.',
    'Các con số chỉ mang tính gần đúng và được cung cấp nguyên trạng, không kèm bất kỳ bảo đảm nào. Mọi quyết định bạn đưa ra sau khi dùng máy tính này hoàn toàn là của bạn; cả tác giả lẫn đơn vị phát hành đều không chịu trách nhiệm cho bất kỳ tổn thất hay thiệt hại nào phát sinh từ đó. Nếu tiền bạc là điều quan trọng với bạn, hãy tự kiểm tra các con số và trao đổi với chuyên gia có chứng chỉ tại nước bạn.',
  ],

  colSymbol: 'Ký hiệu',
  colMeaning: 'Ý nghĩa',
  colValue: 'Giá trị',
  colFrequency: 'Tần suất',
  colMonthlyAmount: 'Số tiền cộng vào tháng đó',

  inputsTitle: '1. Những gì bạn nhập',
  inputsIntro: 'Đây là những giá trị duy nhất mà mô hình sử dụng. Không có gì được lấy từ internet và không có gì được giả định thay bạn.',
  inputMeanings: [
    'Số tiền ban đầu — khoản bạn khởi đầu',
    'Thời hạn đầu tư, tính bằng số năm tròn',
    'Lợi nhuận kỳ vọng hằng năm, tính theo phần trăm',
    'Số kỳ ghép lãi trong một năm (hằng ngày = 365, hằng tháng = 12, hằng quý = 4, nửa năm = 2, hằng năm = 1)',
    'Số tiền góp thêm, được cộng theo tần suất bạn chọn',
    'Lạm phát kỳ vọng hằng năm, tính theo phần trăm',
    'Thuế suất trên phần lời, tính theo phần trăm',
  ],

  rateTitle: '2. Quy lãi suất của bạn về lãi suất tháng',
  rateBefore: 'Mô hình chạy theo từng tháng, nên lãi suất năm bạn nhập phải được biểu diễn thành lãi suất tháng tương đương. Lãi suất của bạn được ghép n lần mỗi năm, nên mỗi kỳ ghép lãi sinh ra r ÷ n, và một tháng bằng n ÷ 12 của kỳ đó.',
  rateAfter: 'Chính số mũ giữ cho hai đại lượng khớp nhau: ghép lãi suất tháng này mười hai lần sẽ tái tạo đúng lãi suất năm của bạn, nên các con số cuối năm trùng khớp với cách tính theo năm. Với 8 % ghép lãi hằng năm, lãi suất tháng là 0,643403 %.',

  contribTitle: '3. Cách khoản góp thêm được cộng vào',
  contribIntro: 'Vì mô hình chạy theo tháng, các khoản góp dày hơn hằng tháng được quy về một mức trung bình theo tháng, còn các khoản thưa hơn chỉ được cộng vào đúng những tháng chúng thực sự rơi vào.',
  contribFrequencies: [
    'Không góp thêm',
    'Hằng ngày',
    'Hằng tuần',
    'Hằng tháng',
    'Hằng quý',
    'Nửa năm',
    'Hằng năm',
  ],
  contribNote: 'Lấy trung bình các khoản góp hằng ngày và hằng tuần giữ cho tổng cả năm chính xác — 365 lần góp ngày và 52 lần góp tuần đúng là những gì thực sự vào tài khoản trong một năm — đổi lại là chênh vài ngày lãi ở chỗ này chỗ kia. Mức chênh đó nhỏ hơn nhiều so với sai số khi bạn ước lượng chính lợi nhuận của mình.',

  orderTitle: '4. Mỗi tháng diễn ra điều gì',
  orderIntro: 'Mỗi tháng trong 12 × Y tháng đều đi qua đúng ba bước, theo thứ tự này:',
  orderSteps: [
    'Tính lãi trên số dư chuyển sang từ tháng trước.',
    'Cộng khoản góp của bạn trong tháng này.',
    'Trừ thuế, nếu tháng này có thuế phải nộp.',
  ],
  orderNote: 'Lãi được tính trước khoản góp, nghĩa là tiền bạn nạp trong tháng này chưa sinh lời ngay trong tháng đó. Đây là quy ước niên kim trả cuối kỳ và cũng là lựa chọn thận trọng hơn: nếu nạp vào đầu tháng, con số cuối cùng sẽ cao hơn khoảng một tháng tăng trưởng.',

  taxTitle: '5. Thuế',
  taxIntro: 'Thuế chỉ đánh trên phần lời, không bao giờ đánh trên số tiền bạn bỏ vào. Đánh khi nào là do bạn chọn.',
  taxAnnualLabel: 'Hằng năm',
  taxAnnualText: 'Cuối mỗi tháng thứ mười hai, phần lời có được trong năm đó bị đánh thuế và thuế được trừ khỏi số dư ngay lập tức. Phần lời bằng số dư hiện tại, trừ số dư đầu năm, trừ tất cả những gì bạn đã góp trong năm. Nếu năm đó kết thúc trong thua lỗ thì phần lời âm và không có thuế, nhưng khoản lỗ đó không được chuyển sang bù trừ cho các năm sau.',
  taxExitLabel: 'Khi rút',
  taxExitText: 'Không có gì bị trừ cho tới tháng cuối cùng, khi toàn bộ phần lời của cả kỳ hạn bị đánh thuế một lần. Phần lời bằng số dư cuối trừ đi mọi khoản đã góp, kể cả số tiền ban đầu.',
  taxNote: 'Trên chặng dài, hai cách này chênh nhau đáng kể, bởi thuế nộp hằng năm là số tiền ngừng sinh lãi kép. Trong ví dụ bên dưới, đánh thuế hằng năm tốn khoảng 14 093 — nên so sánh cả hai trước khi quyết định cách nào hợp với hoàn cảnh của bạn.',

  inflationTitle: '6. Lạm phát',
  inflationIntro: 'Lạm phát không bị trừ khỏi số dư. Nó được áp dụng ở bước cuối, như một phép quy đổi tiền tương lai về những gì nó mua được hôm nay:',
  inflationNote: 't là số năm đã trôi qua, nên giá trị ở tháng m dùng t = m ÷ 12. Đó là lý do con số «thực» luôn thấp hơn con số danh nghĩa khi lạm phát lớn hơn không: tiền thì nhiều lên, nhưng mỗi đơn vị lại mua được ít đi.',

  figuresTitle: '7. Bốn con số chính',
  figuresIntro: 'Bốn ô bên dưới kết quả chính là bốn góc nhìn về cùng một phép mô phỏng. Chúng chỉ khác nhau ở chỗ đã trừ những khoản nào.',
  figureNames: [
    'Tổng số đã góp',
    'Giá trị danh nghĩa',
    'Danh nghĩa sau thuế',
    'Đã điều chỉnh lạm phát',
  ],
  figureNotes: [
    'Số tiền ban đầu cộng với từng khoản góp của bạn. Không có phần tăng trưởng nào. Đây chính là số tiền rời khỏi túi bạn.',
    'Số dư đã tính tăng trưởng nhưng chưa trừ bất cứ thứ gì. Là con số lớn nhất và ít ý nghĩa nhất trong bốn con số — và đây đúng là con số mà phần lớn máy tính hiển thị đơn độc.',
    'Vẫn số dư ấy, đã trừ thuế vào những thời điểm do cách tính thuế bạn chọn quy định.',
    'Số dư sau thuế quy về sức mua của hôm nay. Đây là con số nổi bật ở đầu ứng dụng và là con số duy nhất trả lời được rằng số tiền ấy thực sự mua được gì.',
  ],

  irrTitle: '8. Lợi nhuận thực',
  irrWhyNot: 'Tỷ lệ phần trăm bên cạnh «Lợi nhuận (CAGR)» không phải là giá trị cuối chia cho tổng số đã góp. Cách rút gọn ấy coi mọi khoản góp hằng tháng như thể đã được đầu tư ngay ngày đầu tiên, khiến lợi nhuận bị hạ thấp nghiêm trọng — trong ví dụ bên dưới nó sẽ hiện khoảng 2,6 % thay vì 4,71 %.',
  irrBefore: 'Thay vào đó, máy tính đi tìm mức lãi suất làm cho giá trị hiện tại của tất cả những gì bạn đã góp bằng đúng giá trị bạn nhận được ở cuối kỳ. Mỗi khoản góp trước hết được quy về tiền hôm nay, nên câu trả lời là lợi nhuận thực, sau thuế và sau lạm phát. Với c(m) là số tiền góp ở tháng m và V là số dư thực cuối kỳ, lãi suất tháng x là nghiệm của:',
  irrAfter: 'Phương trình đó không có nghiệm dạng đóng, nên được giải bằng phương pháp chia đôi trong khoảng −50 % đến +50 % mỗi tháng, thu hẹp dần cho tới khi khoảng nhỏ hơn 10⁻¹². Kết quả theo tháng sau đó được quy về năm:',
  irrNote: 'Đây là tỷ suất hoàn vốn nội bộ, chính là thước đo dùng để so sánh các khoản đầu tư có dòng tiền không đều. Vì nó tính đến thời điểm của từng khoản góp, con số này so sánh trực tiếp được với một mức lợi nhuận năm công bố — chỉ khác ở chỗ nó đã trừ thuế và lạm phát.',

  rangeTitle: '9. Khoảng lạc quan và bi quan',
  rangeText: 'Khi bạn bật khoảng lợi nhuận, toàn bộ phép mô phỏng được chạy ba lần: một lần với mức thấp nhất, một lần với mức kỳ vọng và một lần với mức cao nhất. Mọi thứ còn lại giữ nguyên. Ba kết quả ấy không phải xác suất và không đi kèm mức tin cậy nào; chúng chỉ cho thấy cùng một kế hoạch sẽ ra sao dưới ba giả định do chính bạn chọn.',

  exampleTitle: '10. Một ví dụ giải trọn vẹn',
  exampleIntro: 'Đây là các giá trị mặc định của ứng dụng. Mọi con số bên dưới đều có thể tính lại bằng máy tính bỏ túi và khớp chính xác với những gì ứng dụng hiển thị.',
  exampleGivenTitle: 'Dữ liệu đầu vào',
  exampleGivenLabels: [
    'Số tiền ban đầu',
    'Thời hạn',
    'Lợi nhuận năm',
    'Ghép lãi',
    'Góp thêm',
    'Lạm phát',
    'Thuế',
  ],
  exampleStepsTitle: 'Năm đầu tiên, từng tháng một',
  exampleSteps: [
    'Lãi suất tháng: (1 + 0,08 ÷ 1) mũ 1 ÷ 12, trừ 1 = 0,00643403.',
    'Tháng 1: 10 000 × 1,00643403 = 10 064,34, cộng khoản góp 500 = 10 564,34.',
    'Tháng 2: 10 564,34 × 1,00643403 = 10 632,31, cộng 500 = 11 132,31.',
    'Tiếp tục đến tháng 12, số dư đạt 17 016,94. Trong năm bạn đã góp 6 000 và khởi đầu với 10 000, nên phần lời là 17 016,94 − 16 000 = 1 016,94.',
    'Thuế 15 % trên phần lời đó là 152,54, bị trừ ngay, còn lại 16 864,40 chuyển sang năm thứ hai.',
  ],
  exampleResultTitle: 'Sau trọn 15 năm',
  exampleResultLabels: [
    'Tổng số đã góp',
    'Giá trị danh nghĩa',
    'Danh nghĩa sau thuế',
    'Quy về tiền hôm nay',
    'Lợi nhuận thực mỗi năm',
  ],
  exampleClosing: 'Hãy đọc kỹ dòng cuối cùng. Bạn bỏ vào 100 000 và kết thúc với sức mua tương đương 133 640. Con số danh nghĩa 200 525 trông như đã nhân đôi, nhưng thuế lấy đi 20 663 và lạm phát lấy thêm 46 222 nữa. Chính khoảng cách ấy là toàn bộ lý do máy tính này ra đời.',

  excludedTitle: '11. Những gì mô hình không tính đến',
  excludedIntro: 'Đây là những thứ được cố ý bỏ qua. Biết chúng sẽ cho bạn biết nên tin kết quả đến mức nào.',
  excluded: [
    'Phí môi giới, phí nền tảng, phí quản lý quỹ và chênh lệch giá mua–bán. Trên chặng dài, mức phí 1 % mỗi năm có thể ngốn một phần năm giá trị thực cuối cùng.',
    'Biểu thuế lũy tiến, mức miễn trừ, bù trừ lỗ và các tài khoản ưu đãi thuế. Một mức thuế phẳng duy nhất được áp cho toàn bộ phần lời.',
    'Việc quy đổi ngoại tệ và biến động tỷ giá. Mọi con số đều theo đơn vị bạn đã nhập.',
    'Biến động thị trường. Lợi nhuận được cộng đều mỗi tháng, nên rủi ro về thứ tự lợi nhuận — thứ quan trọng nhất ở giai đoạn cuối của một khoản đầu tư dài — hoàn toàn không hiện ra ở đây.',
    'Việc tăng khoản góp theo thời gian, dù là theo lạm phát hay theo thu nhập.',
    'Việc rút tiền, tạm dừng hay thoát sớm trước khi hết kỳ hạn.',
    'Cổ tức được tách riêng khỏi phần tăng giá; lợi nhuận bạn nhập được coi là lợi nhuận tổng.',
    'Bất cứ điều gì đặc thù cho quốc gia, tổ chức cung cấp dịch vụ hay hoàn cảnh riêng của bạn.',
  ],

  limitsTitle: '12. Giới hạn của công cụ này',
  limits: [
    'Mọi thứ trên trang này đều là giả định, không hơn. Mô hình tính trung thực hệ quả của những con số bạn gõ vào; nó không có ý kiến gì về việc các con số ấy có thực tế hay không, và cũng không có cách nào để biết.',
    'Mọi kết quả đều là gần đúng. Các giá trị hiển thị được làm tròn cho dễ đọc trong khi phép tính bên trong giữ nguyên độ chính xác đầy đủ, nên khi kiểm tra bằng tay có thể lệch một hai chữ số cuối.',
    'Máy tính này được cung cấp nguyên trạng, không kèm bảo đảm nào. Không thể đưa ra yêu cầu bồi thường nào đối với tác giả hay đơn vị phát hành về bất kỳ quyết định, tổn thất hay thiệt hại nào liên quan đến việc sử dụng nó.',
  ],
};
